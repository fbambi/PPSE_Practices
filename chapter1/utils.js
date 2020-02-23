// 获取单次的字母序顺序标识
exports.getOrderLabel = str => {
  return str
    .split("")
    .sort()
    .join("");
};
