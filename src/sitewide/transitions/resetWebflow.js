import { restartWebflow } from '@finsweet/ts-utils';

/**
 * Function to update the wf-page attribute and reset Webflow
 */

export const resetWebflow = (data) => {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let webflowPageId = $(dom).find('html').attr('data-wf-page');
  $('html').attr('data-wf-page', webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
  // let parser = new DOMParser();
  // let dom = parser.parseFromString(data.next.html, 'text/html');
  // let webflowPageId = $(dom).find('html').attr('data-wf-page');
  // $('html').attr('data-wf-page', webflowPageId);
  // restartWebflow();
};
