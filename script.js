let omikujiButton = document.getElementById("omikuji-button");
let result = document.getElementById("result");

function omikuji() {
  let r = Math.random();
  if (r < 0.2) {
    // 20%の確率で実行される
    result.textContent ="大吉";
    result.style.color ="red";
  } else if (0.2 <= r && r < 0.7) {
    // 50%の確率で実行される
    result.textContent ="吉";
    result.style.color ="black";
  } else {
    // 30%の確率で実行される
    result.textContent ="凶";
    result.style.color ="blue";
  }
}
omikujiButton.onclick = omikuji;