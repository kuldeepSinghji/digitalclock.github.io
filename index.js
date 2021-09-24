function digiClock(){
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second")

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    }
    
    setInterval(digiClock,1000);