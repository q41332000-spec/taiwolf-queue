import { db } from "./firebase.js";

import {
    ref,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";


const numberInput = document.getElementById("number");
const button = document.querySelector("button");


// 顯示目前號碼
const queueRef = ref(db, "queue");

onValue(queueRef, (snapshot)=>{

    const data = snapshot.val();

    if(data){
        numberInput.value = data.number;
    }

});


// 更新號碼
button.onclick = async () => {

    const number = numberInput.value;

    if (number) {

        try {

            await set(queueRef, {
                number: number,
                time: new Date().toLocaleString("zh-TW")
            });

            alert("更新完成");

        } catch (err) {

            console.error(err);
            alert("更新失敗：" + err.message);

        }

    }

};
