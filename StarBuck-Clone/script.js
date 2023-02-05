function getDatesAfterBeforeDays(days) {
    let currentDate = new Date();
    let afterDaysDate = new Date(currentDate.setDate(currentDate.getDate() + days));
    let beforeDaysDate = new Date(currentDate.setDate(currentDate.getDate() - 2 * days));
  
    return {
      after: formatDate(afterDaysDate),
      before: formatDate(beforeDaysDate)
    };
  }
  
  function formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  let result = getDatesAfterBeforeDays(10);
  console.log(result.after); // Returns the date after 5 days in the format "MM/DD/YYYY"
  console.log(result.before); // Returns the date 5 days ago in the format "MM/DD/YYYY"
  