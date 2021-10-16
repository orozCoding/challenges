  function timeConversion(s) {
  
  //s = "07:05:45AM";
  
  let arr = Array.from(s);
  //console.log(arr);
  
  let oldHour = arr[0].toString() + arr[1].toString();
  oldHour = Number(oldHour)
  
  let amOrPm;
  
  if (arr[8] == "P") {
    if (arr[0] == 1 && arr[1] == 2){
      amOrPm = 0;
      
      } else {
      amOrPm = 12;
      }
  } else {
    amOrPm = 0;
  }
  
  if (arr[8] == "A") {
    if (arr[0] == 1 && arr[1] == 2) {
      oldHour = 0;
    }
    }
  
  
  
  
  let hour = amOrPm + oldHour;
  
  if (hour < 10){
    hour = "0"+hour;
  }
  
  let mins = arr[3] + arr[4];
  let secs = arr[6] + arr[7];
  
  let string = `${hour}:${mins}:${secs}`
  
  return string;
    
  
  } console.log(timeConversion("12:20:00AM"))


