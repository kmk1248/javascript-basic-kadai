// 変数numにランダムな整数を代入する
let num = Math.floor(Math.random() * 15);

// 変数numの値を出力する（確認用）
console.log(num);


if (num % 3 == 0) {
  console.log('3の倍数です');
}

else if (num % 5 == 0) {
  console.log('5の倍数です');
}

// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う
else if (num % 3  == 0 && num % 5  == 0) {
  console.log('3と5の倍数です');
}

else {
  console.log(num);
}