export const makeCurrentActive = (data) => {
  const transitionItems = [...data.current.container.querySelectorAll('[data-transition="image"]')];
  const active = transitionItems.find((item) => {
    const link = item.closest('a');
    return link.pathname === data.next.url.path;
  });

  active.classList.add('active-transition');
  active.dataset.flipId = 'active-transition';
  return active;
};
