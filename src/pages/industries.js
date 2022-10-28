import { restartWebflow } from '@finsweet/ts-utils';

import { createElement, log, wrapTextInSpan } from '../utils';

/**
 * Function to format the industry pages
 */

export const industries = () => {
  log('INDUSTRIES');

  const heroWrap = document.querySelector('input[name="wrapTextInSpan"]');
  if (heroWrap) {
    wrapTextInSpan(
      heroWrap.parentElement.previousElementSibling,
      heroWrap.value,
      'hero_highlight is-inline'
    );
  }

  const workLinks = [...document.querySelectorAll('.industry-work_link')];
  workLinks.forEach((link) => {
    const id = link.querySelector('[data-work-name]').textContent.toLowerCase().replace('#', '');
    const newElement = createElement('a', link.parentNode, {
      id,
      class: 'industry-work_link',
      href: `/work/${link.querySelector('input').value}`,
    });

    const children = [...link.children];
    children.forEach((child) => {
      newElement.appendChild(child);
    });

    link.remove();
  });

  const cmsListItems = [...document.querySelectorAll('.cms-list_rich-text li')];
  cmsListItems.forEach((item) => {
    item.classList.add('slide-up');
  });
  restartWebflow();

  const sprintArrows = [...document.querySelectorAll('.sprints_arrow')];
  const sprintNavDots = [...document.querySelectorAll('.sprints_component .w-slider-dot')];
  const disableArrows = () => {
    const active = sprintNavDots.find((dot) => {
      return dot.classList.contains('w-active');
    });

    const activeIndex = sprintNavDots.indexOf(active);

    if (activeIndex === 0) {
      sprintArrows[0].classList.add('is-disabled');
      sprintArrows[1].classList.remove('is-disabled');
    } else if (activeIndex === sprintNavDots.length - 1) {
      sprintArrows[0].classList.remove('is-disabled');
      sprintArrows[1].classList.add('is-disabled');
    } else {
      sprintArrows[0].classList.remove('is-disabled');
      sprintArrows[1].classList.remove('is-disabled');
    }
  };

  disableArrows();
  sprintArrows.forEach((arrow) => {
    arrow.onclick = () => {
      setTimeout(() => {
        disableArrows();
      }, 10);
    };
  });
};
