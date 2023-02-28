function getTimeString(postTime) {
  console.log(postTime);
  console.log(postTime.getTime());

  const currentTimeMS = Date.now();
  const currentTime = new Date(currentTimeMS);

  const postTimeMS = postTime.getTime();



  const currentTimeYear = currentTime.getFullYear();
  const currentTimeMonth = currentTime.getMonth();
  const currentTimeDay = currentTime.getDay();

  const postTimeYear = postTime.getFullYear();
  const postTimeMonth = postTime.getMonth();
  const postTimeDay = postTime.getDay();

  const timeDiff = currentTimeMS - postTimeMS;
  const timeDiffMin = timeDiff / 1000 / 60;
  const timeDiffHour = timeDiffMin / 24;

  if (timeDiffMin < 2) {
    return 'Just now';
  } else if (timeDiffMin < 10) {
    return 'A few minutes ago'
  } else if (timeDiffMin < 60) {
    return 'Less than an hour ago'
  } else if (currentTimeYear === postTimeYear && currentTimeMonth === postTimeMonth && currentTimeDay === postTimeDay) {
    return 'Today'
  } else if (currentTimeYear === postTimeYear && currentTimeMonth === postTimeMonth && currentTimeDay - 1 === postTimeDay) {
    return 'Yesterday'
  } else if (currentTimeYear === postTimeYear) {
    return 'This Year'
  } else {
    return `${currentTimeYear - postTimeYear} Years Ago`
  }

  return 'test';
}



module.exports = {
  getTimeString
}