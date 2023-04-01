const headerMore = document.querySelector('[data-id="header-more"]');

headerMore.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.querySelector(headerMore.getAttribute("href"));
  const yPos = target.getBoundingClientRect().top + window.scrollY;
  smoothScrollTo(yPos, 15000);
});

const smoothScrollTo = (yPos, duration) => {
  const startY = window.scrollY;
  const difference = yPos - startY;
  const startTime = performance.now();

  const step = () => {
    const progress = (performance.now() - startTime) / duration;
    const amount = easeInOutCubic(progress);
    window.scrollTo({ top: startY + amount * difference });
    if (progress < 0.99) {
      window.requestAnimationFrame(step);
    }
  };

  step();
};

// Easing function from https://gist.github.com/gre/1650294
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
