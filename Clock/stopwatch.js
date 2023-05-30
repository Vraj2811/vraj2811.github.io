const currentTime = document.querySelector('.time'),
    Btn = document.querySelector('.button'),
    btn1 = document.querySelector('.start');

let h = 0;
h = h.toString().padStart(2, '0');
let m = 0;
m = m.toString().padStart(2, '0');
let s = 0;
s = s.toString().padStart(2, '0');

function Clock() {
    if (btn1.innerHTML === "Stop") {
        btn1.innerHTML = "Resume";
        clearInterval(time);
    }
    else {
        time = setInterval(() => {
            s++;
            s = s.toString().padStart(2, '0');
            if (s === "60") {
                s = 0;
                s = s.toString().padStart(2, '0');
                m++;
                m = m.toString().padStart(2, '0');
            }
            if (m === "60") {
                m = 0;
                m = m.toString().padStart(2, '0');
                h++
                h = h.toString().padStart(2, '0');
            }

            let time = `${h}:${m}:${s}`;
            displayTime();
        }, 1000)

        if (btn1.innerHTML === "Start") {
            var button = document.createElement("button");
            button.innerText = "Reset";
            button.className = "reset"
            Btn.appendChild(button);
            Btn.style.justifyContent = "space-between";
            button.addEventListener("click", Reset);
            btn1.innerHTML = "Stop";
        }

        else if (btn1.innerHTML === "Resume") {
            btn1.innerHTML = "Stop";
        }
    }
}
function Reset() {
    var button = document.querySelector('.reset');
    button.remove();
    Btn.style.justifyContent = "center";
    btn1.innerHTML = "Start";
    currentTime.innerText = "00:00:00";
    h = 0;
    h = h.toString().padStart(2, '0');
    m = 0;
    m = m.toString().padStart(2, '0');
    s = 0;
    s = s.toString().padStart(2, '0');
    clearInterval(time);
}

function displayTime() {
    currentTime.innerText = `${h}:${m}:${s}`;
}

btn1.addEventListener("click", Clock);

