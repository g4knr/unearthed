/**
 * Function to place the transition items in the transition wrapper
 * @param {object} data - the default Flip data object
 */

export const placeTransitionItems = (data) => {
  const allTransitionItems = [...data.current.container.querySelectorAll('[data-transition]')];
  const filteredTransitionItems = allTransitionItems.filter((item) => {
    if (item.dataset.transition !== 'image') return true;
    const link = item.closest('a');
    return link?.pathname === data.next.url.path;
  });

  const transitionForeground = document.querySelector('.transition_foreground');
  const transitionBackground = document.querySelector('.transition_background');
  filteredTransitionItems.forEach((item) => {
    item.dataset.flipId = item.dataset.transition;
    const state = Flip.getState(item);
    if (item.dataset.transitionPosition === 'foreground') transitionForeground.appendChild(item);
    if (item.dataset.transitionPosition === 'background') transitionBackground.appendChild(item);
    Flip.to(state, { absolute: true, duration: 0 });
  });

  return filteredTransitionItems;
};
