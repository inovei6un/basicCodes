function timeToWalk(steps, stepLength, speed){
    let distanceInMeters = steps * stepLength;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInMeters / speedMetersInSec;
    let rest = Math.floor(distanceInMeters / 500);
    
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number(time - (timeInMin * 60)).toFixed(0);
    let timeInHours = Math.floor(time / 3600);
    timeInMin += rest;
    timeInHours += Math.floor(timeInMin / 60);
    timeInMin =timeInMin % 60;

    let formattedHours = timeInHours < 10 ? `0${timeInHours}`: `${timeInHours}`;
    let formattedMinutes = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedSeconds = timeInSec < 10 ? `0${timeInMin}` : `${timeInSec}`;

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`)
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)