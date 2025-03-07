function updateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    let m =null;
    if( +hours >12 ){ 
        hours=+hours-12;
        hours=hours.toString().padStart(2,0);
        m="PM"; 
    }
    else{ 
        hours;
        m="AM"
    }
    const minutes = now.getMinutes().toString().padStart(2,0);    
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${m}`;
    document.getElementById("clock").textContent = timeString;
}  
updateClock();
setInterval(updateClock,1000); 