const getOrderLabel = require("./utils.js");

console.time("run");

const data = require("./data.json");

const collection = {};
const preCollection = {};

data.forEach(word => {
  const orderComp = getOrderLabel(word);

  // 已有大于一条的记录，追加
  if (collection[orderComp]) {
    collection[orderComp].push(word);

    // 已有一条记录，符合变位词，正式纳入
  } else if (preCollection[orderComp]) {
    preCollection[orderComp].push(word);
    collection[orderComp] = preCollection[orderComp];
    preCollection[orderComp] = null;

    // 无记录，作为预变位词处理
  } else {
    preCollection[orderComp] = [word];
  }
});

const result = Object.values(collection);
console.log(result);
console.log(`words count: ${data.length}`);
console.timeEnd("run");
