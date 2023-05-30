setInterval(() => {
    date = new Date();

    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrotation = htime * 30 + mtime / 2;
    mrotation = mtime * 6;
    srotation = stime * 6;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);