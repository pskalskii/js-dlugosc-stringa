let trueWords = "Uwielbiam JavaScript";
let nearFuture = "Jestem świetnym programistą";

function sentence(text1, text2) {
  if (text1.length > text2.length) {
    return text1;
  } else {
    return text2;
  }
}

console.log(sentence(trueWords, nearFuture));
