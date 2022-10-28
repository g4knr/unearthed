/**
 * Function to initialise all splide instances
 * @param {element} entity - e.g. document.body or data.next.container
 * @returns
 */

export const splide = (entity) => {
  const SPLIDES = [...entity.querySelectorAll('.splide')];
  if (SPLIDES.length === 0) return;

  const DEFAULT = {
    type: 'slide',
    perMove: 1,
    perPage: 3,
    gap: '1.125rem',
    pagination: false,
    wheel: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      479: {
        perPage: 1,
      },
    },
  };

  SPLIDES.forEach((splide) => {
    new Splide(splide, {
      type: 'slide',
      perMove: 1,
      perPage: 3,
      gap: '1.125rem',
      pagination: false,
      wheel: true,
      breakpoints: {
        991: {
          perPage: 2,
        },
        479: {
          perPage: 1,
        },
      },
    }).mount();
  });
};
