var countries = ["Japan","America","Germany","France"];
console.log(countries[0]);
console.log(countries[2]);


/*
・key
　...プログラミングをする上でのプロパティ名
・value
　...プロパティの値
・プロパティー
　...あらかじめ設定した値に名前をつけたもので、keyとvalueが組み合わさったもののこと。
*/


var player = {
  name: "ABC",
  nation: "Japan",
  position: "PG",
}
console.log(player);


var players = [
  {
    name: "Kevin",
    age: 23,
    nation: "America",
    position: "C/PF",

  },
  {
    name: "Michael",
    age: 30,
    nation: "Germany",
    position: "SF/PF",
  },
  {
    name: "ケン",
    age: 27,
    nation: "Japan",
    position: "PG/SG",
  }
]
console.log(players[0].name);
console.log(players[2].name);