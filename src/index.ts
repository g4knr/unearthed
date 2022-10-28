import { getCurrentBreakpoint } from '@finsweet/ts-utils';

import * as pages from './pages';
import * as sitewide from './sitewide';
import * as utils from './utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  // UNEARTHED();
  const UNEARTHED = (() => {
    utils.log('greg');

    const breakpoint = getCurrentBreakpoint();
    if (breakpoint === 'main') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(Flip);
      sitewide.initTransition();
      sitewide.footer();
    }

    sitewide.nav();
    utils.splide(document.body);

    const path = utils.getPath();
    if (path.includes('/industries/')) {
      pages.industries();
    } else if (path.includes('/work/')) {
      pages.works();
    }
  })();
});
