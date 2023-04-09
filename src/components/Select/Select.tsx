import * as React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  // offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
  FloatingOverlay,
} from "@floating-ui/react";
import styles from "./Select.module.css";

interface Props {
  options: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  defaultSelected?: number;
  renderHandler?: (value: string) => React.ReactNode | undefined;
  renderValue?: (value: string) => React.ReactNode | undefined;
  onChange?: (index: number) => void;
}

export function Select({
  options,
  isOpen,
  setIsOpen,
  defaultSelected,
  renderValue,
  renderHandler,
  onChange,
}: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
    typeof defaultSelected === "number" ? defaultSelected : null
  );

  const { x, y, strategy, refs, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      // offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            width: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const listContentRef = React.useRef(options);
  const isTypingRef = React.useRef(false);

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNav, typeahead]
  );

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
    onChange && onChange(index);
  };

  const selectedItemLabel =
    selectedIndex !== null ? options[selectedIndex] : undefined;

  const handler =
    renderHandler && selectedItemLabel
      ? renderHandler(selectedItemLabel)
      : null;

  return (
    <>
      <div
        tabIndex={0}
        ref={refs.setReference}
        aria-autocomplete="none"
        className={styles.select}
        {...getReferenceProps()}
      >
        {handler || "Select..."}
      </div>

      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay style={{ zIndex: 10 }}>
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={refs.setFloating}
                className={styles.select__content}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                }}
                {...getFloatingProps()}
              >
                <div className={styles.select__scroller}>
                  {options.map((value, i) => (
                    <div
                      key={value}
                      ref={(node) => {
                        listRef.current[i] = node;
                      }}
                      role="option"
                      tabIndex={i === activeIndex ? 0 : -1}
                      aria-selected={i === selectedIndex && i === activeIndex}
                      className={styles.option}
                      style={{
                        backgroundColor:
                          i === activeIndex
                            ? "rgba(155, 170, 190, .2)"
                            : undefined,
                        color:
                          i === activeIndex
                            ? "white"
                            : "rgba(255, 255, 255, .8)",
                      }}
                      {...getItemProps({
                        // Handle pointer select.
                        onClick() {
                          handleSelect(i);
                        },
                        // Handle keyboard select.
                        onKeyDown(event) {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            handleSelect(i);
                          }

                          if (event.key === " " && !isTypingRef.current) {
                            event.preventDefault();
                          }
                        },
                        onKeyUp(event) {
                          if (event.key === " " && !isTypingRef.current) {
                            handleSelect(i);
                          }
                        },
                      })}
                    >
                      {renderValue ? renderValue(value) : value}
                      {i === selectedIndex ? (
                        <span
                          aria-hidden
                          className={styles.option__checkmark}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
}
