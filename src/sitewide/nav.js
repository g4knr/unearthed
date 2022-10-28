/**
 * Function to control the nav animation
 */

export const nav = () => {
  const NAV = document.querySelector('.nav');
  const NAV_SCROLL = document.querySelector('.nav-scroll_trigger');
  const NAV_CONTAINER = NAV.querySelector('.nav_container');

  NAV_SCROLL.style.height = `${NAV.offsetHeight}px`;

  const navTimline = gsap.timeline({
    scrollTrigger: {
      trigger: '.nav-scroll_trigger',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  navTimline.to(NAV_CONTAINER, {
    backgroundColor: '#1c1c1c',
    boxShadow: '0 10px 4rem 0 rgba(0, 0, 0, 0.5)',
    duration: 1,
  });
};
