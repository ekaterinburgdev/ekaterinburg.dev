const WRAPPER_SELECTOR = '[data-id="scroller-wrapper"]';
const PREVIEW_SELECTOR = '[data-id="scroller-preview"]';
const CONTENT_SELECTOR = '[data-id="scroller-content"]';

interface Output {
  disableLimitedScrollHeight: VoidFunction;
  enableLimitedScrollHeight: VoidFunction;
  subscribe: VoidFunction;
  unsubscribe: VoidFunction;
}

const defaultValues = {
  disableLimitedScrollHeight: () => {},
  enableLimitedScrollHeight: () => {},
  subscribe: () => {},
  unsubscribe: () => {},
};

export function initLimitedScrollHeight(): Output {
  const scroller = document.querySelector(WRAPPER_SELECTOR) as HTMLDivElement;
  const content = document.querySelector(CONTENT_SELECTOR) as HTMLDivElement;
  const previewChild = document.querySelector(PREVIEW_SELECTOR)
    ?.firstChild as HTMLDivElement;

  if (!scroller || !previewChild) return defaultValues;

  let canResize = true;
  function resize() {
    if (!canResize) return;

    const height = previewChild.offsetHeight;
    scroller.style.height = height - height * 0.05 + "px";
  }

  const subscribe = () => {
    window.addEventListener("resize", resize);
  };

  const unsubscribe = () => {
    window.removeEventListener("resize", resize);
  };

  const enableLimitedScrollHeight = () => {
    scroller.style.overflow = "hidden";
    content.style.visibility = "hidden";
    content.setAttribute("aria-hidden", "true");
    canResize = true;
    resize();
  };

  const disableLimitedScrollHeight = () => {
    scroller.style.overflow = "";
    scroller.style.height = "";
    content.style.visibility = "";
    content.removeAttribute("aria-hidden");
    canResize = false;
  };

  return {
    disableLimitedScrollHeight,
    enableLimitedScrollHeight,
    subscribe,
    unsubscribe,
  };
}
