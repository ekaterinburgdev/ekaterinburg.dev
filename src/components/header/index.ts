import { initLimitedScrollHeight } from "./limited-scroll";
import {
  initSmoothScrollPrevention,
  GetCanAnimate,
} from "./smooth-scroll-prevention";

const LINK_SELECTOR = '[data-id="header-more"]';

// Easing function from https://gist.github.com/gre/1650294
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const smoothScrollTo = (
  yPos: number,
  duration: number,
  getCanAnimate: GetCanAnimate
) => {
  const startY = window.scrollY;
  const difference = yPos - startY;
  const startTime = performance.now();

  const step = () => {
    if (!getCanAnimate()) return;

    const progress = (performance.now() - startTime) / duration;
    const amount = easeInOutCubic(progress);
    window.scrollTo({ top: startY + amount * difference });
    if (progress < 0.99) {
      window.requestAnimationFrame(step);
    }
  };

  step();
};

function scrollToLink(link: HTMLAnchorElement, getCanAnimate: GetCanAnimate) {
  const href = link.getAttribute("href");
  if (!href) return () => {};

  const target = document.querySelector(href);
  if (!target) return () => {};

  const yPos = target.getBoundingClientRect().top + window.scrollY;

  smoothScrollTo(yPos - window.scrollY * 0.02, 15000, getCanAnimate);
}

function loadAllLazyResources() {
  document.querySelectorAll('[loading=lazy]').forEach(x => {
    x.removeAttribute('loading');
  })
}

export function initSmoothScroll(): VoidFunction {
  const link = document.querySelector(LINK_SELECTOR) as HTMLAnchorElement;
  const {
    disableLimitedScrollHeight,
    enableLimitedScrollHeight,
    subscribe: subscribeLimitScrollEvents,
    unsubscribe: unsubscribeLimitScrollEvents,
  } = initLimitedScrollHeight(); // scroll only in preview

  let {
    getCanAnimate,
    subscribe: subscribeOnScrollPrevention,
    unsubscribe: unsubscribeScrollPreventionEvents,
  } = initSmoothScrollPrevention(); // prevent autoscroll on wheel \ touchmove

  function onActionClick(e: MouseEvent) {
    e.preventDefault();

    loadAllLazyResources();

    // we should subscribe on prevention only after click
    subscribeOnScrollPrevention();

    // we should enable scroll only after click
    disableLimitedScrollHeight();

    // scroll to link, prevent if wheel\touchmove event
    scrollToLink(link, getCanAnimate);
  }

  // disable scroll on init
  enableLimitedScrollHeight();

  // adjust on resize
  subscribeLimitScrollEvents();

  link.addEventListener("click", onActionClick);

  return () => {
    link.removeEventListener("click", onActionClick);
    unsubscribeLimitScrollEvents();
    unsubscribeScrollPreventionEvents();
  };
}
