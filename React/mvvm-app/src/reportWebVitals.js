/**
 * @param {Function} onPerfEntry Функция обратного вызова для метрик производительности
 * @typedef {Object} WebVitals
 * @property {Function} getCLS - Cumulative Layout Shift
 * @property {Function} getFID - First Input Delay
 * @property {Function} getFCP - First Contentful Paint
 * @property {Function} getLCP - Largest Contentful Paint
 * @property {Function} getTTFB - Time to First Byte
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
