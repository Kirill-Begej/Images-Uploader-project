export default class ElementsFactory {
  static getBlockElement({
    elementTag,
    elementClass = false,
    elementContent = false,
    elementAttributes = false,
  }) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      elementClass.forEach((item) => {
        element.classList.add(item);
      });
    }
    if (elementContent) {
      element.textContent = elementContent;
    }
    if (elementAttributes) {
      Object.keys(elementAttributes).forEach((key) => {
        element.setAttribute(key, elementAttributes[key]);
      });
    }
    return element;
  }

  static getSvgElement({
    svgAttributeViewBox,
    elementClass,
    elementAttributes,
  }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add(elementClass);
    svg.setAttributeNS(null, 'viewBox', svgAttributeViewBox);
    elementAttributes.forEach((obj) => {
      const path = document.createElementNS(svg.namespaceURI, 'path');
      Object.keys(obj).forEach((key) => {
        path.setAttributeNS(null, key, obj[key]);
      });
      svg.append(path);
    });
    return svg;
  }
}
