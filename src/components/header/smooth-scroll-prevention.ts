export type GetCanAnimate = () => boolean;

export function initSmoothScrollPrevention() {
  let canAnimate = true;
  function onPreventEvent() {
    canAnimate = false;
  }

  function unsubscribe() {
    window.removeEventListener("wheel", onPreventEvent);
    window.removeEventListener("touchmove", onPreventEvent);
  }

  function subscribe() {
    canAnimate = true;
    unsubscribe(); // unsubscribe from old listeners

    window.addEventListener("wheel", onPreventEvent);
    window.addEventListener("touchmove", onPreventEvent);
  }

  const getCanAnimate: GetCanAnimate = () => canAnimate;

  return {
    getCanAnimate,
    subscribe,
    unsubscribe,
  };
}
