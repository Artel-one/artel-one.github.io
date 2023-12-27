import { animateScroll } from "react-scroll";
import getScrollTop from "../getScrollTop";

/**
 * Плавно скроллит экран до нужного блока на странице
 * @example
 * scrollToBlock('#about', -50)}
 * @param {string} selector - селектор для выбора блока, к которому нужно проскроллить
 * @param {number} offset - сдвиг в пикселях относительно положения нужного блока. Может быть отрицательным, если нужно
 *   проскроллить выше блока
 * @param {number} duration - длительность анимации
 */
const scrollToBlock = (selector: string, offset = 0, duration = 1000) => {
  const block = document.querySelector(selector);

  if (!block) return false;

  const totalBlockOffsetTop =
    block.getBoundingClientRect().top + getScrollTop() + offset;

  animateScroll.scrollTo(totalBlockOffsetTop, { duration });

  return true;
};

export default scrollToBlock;
