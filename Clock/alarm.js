const currentTime = document.querySelector('.time'),
    selectMenu = document.querySelectorAll('select'),
    setAlarmBtn = document.querySelector('button');

let ringtone = new Audio("ringtone.mp3");
let isAlarmSet = false;

for (let i = 1; i <= 12; i++) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectMenu[0].appendChild(option);
}

for (let i = 0; i <= 59; i++) {
    i = i < 10 ? `0${i}` : i;
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectMenu[1].appendChild(option);
}

const option = document.createElement('option');
option.value = 'PM';
option.text = 'PM';
selectMenu[2].appendChild(option);

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Min")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);