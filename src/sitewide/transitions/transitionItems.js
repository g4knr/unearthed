export const transitionItems = (data, transitionItems) => {
  transitionItems.forEach((item) => {
    // const selector = `[data-transition="${item.dataset.transition}"]`;
    // const target = data.next.container.querySelector(selector);
    const state = Flip.getState(item);
    item.classList.add('final');
    Flip.from(state, {
      //   fade: true,
      absolute: true,
      duration: 0,
    });
  });
};
