/**
 * Creates an element with given options and appends it to the desired location
 * @param type the type of element to create e.g. div, script, link
 * @param location where to append the element e.g. document.body
 * @param options options to add e.g. class, dataset, text, src
 * @returns
 */

export const createElement = (type, location, options) => {
  const element = document.createElement(type);

  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value);
      return;
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === 'text') {
      element.textContent = value;
      return;
    }

    if (key === 'callback') {
      element.onload = value;
      return;
    }

    element.setAttribute(key, value);
  });

  location.appendChild(element);
  return element;
};
