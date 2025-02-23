function getCompleted(timeWorked, totalTime) {
  function getTimeInMinutes(time) {
    const [hours, minutes, seconds] = time.split(":");
    return +hours * 3600 + +minutes * 60 + +seconds;
  }

  const timeWorkedInMinutes = getTimeInMinutes(timeWorked);
  const totalTimeInMinutes = getTimeInMinutes(totalTime);
  
  return (
    "" + Math.round((100 * timeWorkedInMinutes) / totalTimeInMinutes) + "%"
  );
}