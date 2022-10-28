/**
 * @returns true if on the staging domain
 */

export const isStaging = () => {
  return window.location.href.includes('.webflow.io');
};
