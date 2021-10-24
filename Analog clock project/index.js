function myFunction(){
   let d = new Date();
   let htime = d.getHours();
   let mtime = d.getMinutes();
   let stime = d.getSeconds();
   let hrotation = 30 * htime + mtime/2;
   let mrotation = 6 * mtime;
   let srotation = 6 * stime;

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
   setInterval(myFunction,1000);
}

// setInterval(() => {
//     let d = new Date();
//    let hTime = d.getHours();
//    let mTime = d.getMinutes();
//    let sTime = d.getSeconds();
//    let hRotation = 30*hTime + mTime/2;
//    let mRotation = 6*mTime;
//    let sRotation = 6*sTime;

//    hour.style.webkitTransform =`rotate(${hRotation}deg)`;
//    minute.style.webkitTransform =`rotate(${mRotation}deg)`;
//    second.style.webkitTransform =`rotate(${sRotation}deg)`;
 
// }, 1000);
