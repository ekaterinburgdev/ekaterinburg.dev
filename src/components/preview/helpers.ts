export const SVG_DOCTYPE = "http://www.w3.org/2000/svg";

export function getScrollPercent(scrollHeight: number) {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;

  return (scrollTop / (scrollHeight - doc.clientHeight)) * 100;
}

export function getDimensions() {
  const doc = document.documentElement;

  return {
    vw: Math.max(doc.clientWidth || 0, window.innerWidth || 0),
    vh: Math.max(doc.clientHeight || 0, window.innerHeight || 0),
  };
}

export function onScrollListener({
  element,
  onStartScroll,
  onScroll,
  onEndScroll,
}: {
  element: HTMLElement;
  onStartScroll: (scrollPosition: number) => void;
  onScroll: (scrollPosition: number) => void;
  onEndScroll: (scrollPosition: number) => void;
}) {
  let isScroll = false;
  let timer: ReturnType<typeof setTimeout>;

  window.addEventListener(
    "scroll",
    () => {
      let scrollPosition = getScrollPercent(element.offsetHeight);

      if (isScroll) {
        onScroll(scrollPosition);

        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          isScroll = false;
          onEndScroll(scrollPosition);
        }, 150);
      } else {
        onStartScroll(scrollPosition);
        setTimeout(() => {
          isScroll = true;
        }, 100);
      }
    },
    { passive: true }
  );
}

export const checkIsMobile = () => window.innerWidth < 768;

export const clamp = (num: number, min: number, max: number) =>
  num <= min ? min : num >= max ? max : num;
