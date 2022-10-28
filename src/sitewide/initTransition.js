import * as pages from '../pages';
import { splide } from '../utils';
import { footer } from './footer';
import { nav } from './nav';
import * as transitions from './transitions';

/**
 * Ideas
 * - each namespace has a list of transition elements to look for on entry and only those are ran
 */

export const initTransition = () => {
  barba.init({
    preventRunning: true,
    transitions: [
      {
        sync: true,
        to: { namespace: ['work-template'] },
        enter(data) {
          // return gsap.from(data.next.container.querySelector('.nav'), {
          //   opacity: 0,
          //   delay: 20,
          //   duration: 0.5,
          //   ease: 'power1.inOut',
          // });
        },
        after(data) {},
      },
    ],
  });

  barba.hooks.enter((data) => {
    data.next.container.classList.add('fixed');
    transitions.resetWebflow(data);

    const filteredTransitionItems = transitions.placeTransitionItems(data);

    gsap.to(data.current.container.querySelector('main'), {
      opacity: 0,
      delay: 0,
      duration: 0.5,
      ease: 'power1.inOut',
    });

    transitions.flip(filteredTransitionItems, data);

    const transitionItems = [...data.next.container.querySelectorAll('[data-flip-id]')];
    transitionItems.forEach((item) => item.classList.remove('hide'));

    gsap.from(data.next.container.querySelector('main'), {
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      ease: 'power1.inOut',
    });

    splide(data.next.container);

    return gsap.to(data.current.container.querySelector('.nav'), {
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  });

  barba.hooks.after((data) => {
    data.next.container.classList.remove('fixed');
    $(window).scrollTop(1);
    $(window).scrollTop(0);
    transitions.resetWebflow(data);
    nav();
    footer();
    const { path } = data.next.url;
    if (path.includes('/industries/')) {
      pages.industries();
    } else if (path.includes('/work/')) {
      pages.works();
    }
    // const transitionItems = [...data.next.container.querySelectorAll('[data-flip-id]')];
    // transitionItems.forEach((item) => item.classList.remove('hide'));
  });
};
