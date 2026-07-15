import { db } from "./firebase.js";

import {
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const numberInput = document.getElementById("number");
const button = document.querySelector("button");

// 櫃台密鑰
const ADMIN_KEY = "0731";

// 資料庫位置
const queueRef = ref(db, "queue");

// 讀取目前號碼
onValue(queueRef, (snapshot) => {
  const data = snapshot.val();

  if (data && data.number) {
    numberInput.value = data.number;
  }
});


// 更新叫號
button.addEventListener("click", async () => {

  const number = numberInput.value.trim();

  if (number === "") {
    alert("請輸入號碼");
    return;
  }


  button.disabled = true;


  try {

    await set(queueRef, {

      number: number,

      time: new Date().toISOString(),

      key: ADMIN_KEY

    });


    alert("更新完成");


  } catch (error) {

    console.error("Firebase Error:", error);

    alert("更新失敗：" + error.message);


  } finally {

    button.disabled = false;

  }

});
