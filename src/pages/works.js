export const works = () => {
  const scrollItem = document.querySelector('.work-gallery.is-1 .work-gallery_item:nth-child(1)');
  console.log(scrollItem);

  const worksTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: scrollItem,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  worksTimeline.from(scrollItem, {
    width: '50%',
    duration: 1,
  });
};
