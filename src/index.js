//display odd number of time repeating elements
//display first item repeating odd times

const fun1 = (str) => {
  let arr = str.toLowerCase().split("");
  let count = {};
  arr.forEach((e) => {
    count[e] ? count[e]++ : (count[e] = 1);
  });
  console.log("counr obj", count);

  let nonRepeatItem = [];
  for (let e in count) {
    count[e] === 1 && nonRepeatItem.push(e);
  }
  console.log("result array ", nonRepeatItem);

  let firstNoRepeatItem = arr.find((e) => nonRepeatItem.includes(e));

  console.log("firstItem original", firstNoRepeatItem);
};

fun1("hhello");

const fun2 = (str) => {
  let arr = str.toLowerCase().split("");
  let repeatingItems = arr.filter((item, i) => arr.indexOf(item) !== i);

  let firstNoRepeatItem = arr.find((item) => !repeatingItems.includes(item));
  console.log("firstItem with filter", firstNoRepeatItem);
};
fun2("hahgk");
