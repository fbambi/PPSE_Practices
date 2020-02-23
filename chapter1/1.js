const { getOrderLabel } = require("./utils");

const data = require("./data.json");
const TARGET_WORD = "cotesian";

// 无字典预处理
(() => {
  const orderLabel = getOrderLabel(TARGET_WORD);
  const result = [];

  data.forEach(word => {
    if (getOrderLabel(word) === orderLabel) {
      result.push(word);
    }
  });
  console.log(result);
})();

// 有字典预处理
(() => {
  /**
   * 处理方式见all_anagram.js实现的查找所有变位词的代码
   * 最后返回指定单词对应标识符的所有单词即可
   */
})();
