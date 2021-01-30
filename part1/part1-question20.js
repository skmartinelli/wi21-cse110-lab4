
function doStuff(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var timer = setInterval(doStuff, 1000);