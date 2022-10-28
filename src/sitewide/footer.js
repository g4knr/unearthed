export const footer = () => {
  const footer = document.querySelector('.footer');
  const preFooter = document.querySelector('.pre-footer');

  const footerTimline = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  footerTimline.to(preFooter, {
    '--triangle-clip':
      '0% 0%, 100% 0%, 100% 100%, calc(50% + 12rem) 100%, 50% calc(100% - 3rem), calc(50% - 12rem) 100%, 0% 100%',
    duration: 1,
  });
};
