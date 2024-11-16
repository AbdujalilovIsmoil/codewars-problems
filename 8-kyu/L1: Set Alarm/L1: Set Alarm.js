const setAlarm = (employed, vacation) => employed && vacation ? false : employed === true && vacation === false ? true : false;

setAlarm(true, true);
setAlarm(true, false);
setAlarm(false, false);