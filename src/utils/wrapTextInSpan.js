/**
 * Function to wrap some text with a given class
 * @param {element} element - the element which holds the text
 * @param {string} text - the text to wrap
 * @param {string} addClass - the class to add
 */

export const wrapTextInSpan = (element, text, addClass) => {
  $(element).html(function (_, html) {
    const replace = text;
    const expression = new RegExp(replace, 'g');
    return html.replace(expression, `<span class="${addClass}">${text}</span>`);
  });
};
