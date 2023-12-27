/**
 * Кроссбраузерный метод для получения текущего вертикального скролла
 */
const getScrollTop = (target?: Document) => {
  return target
    ? (target.documentElement && target.documentElement.scrollTop) ||
        (target.body && target.body.scrollTop) ||
        0
    : window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
};

export default getScrollTop;
