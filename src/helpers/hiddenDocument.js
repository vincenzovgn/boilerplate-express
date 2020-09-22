/**
 *
 * @param {String} document numero do document
 * @param {Number} sliceVal ultimos valores mostrados, por padrão (-3) o que significa que irá mostrar os 3 ultimos valores
 * @returns {String} documento com digitos escondidos.
 */
module.exports = (document, sliceVal = -3) => {
  const sliceValue = document.slice(sliceVal);
  const lastIndex = document.lastIndexOf(sliceValue);
  return document.slice(0, lastIndex).replace(/\d/g, '*').concat(sliceValue);
};
