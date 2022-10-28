export const flip = (transitionItems, data) => {
  transitionItems.forEach((item) => {
    const { flipId } = item.dataset;
    const incoming = data.next.container.querySelector(`[data-flip-id="${flipId}"]`);
    item.classList.add('hide');
    const state = Flip.getState(incoming, {
      props: 'borderRadius',
    });
    item.classList.remove('hide');
    incoming.classList.add('hide');
    Flip.to(state, { targets: [item], duration: 0.5, ease: 'power1.inOut' });
  });
};
