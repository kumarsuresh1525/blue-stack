const formatedDate = (timeStamp) => {
  const months = ["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const current_datetime = new Date(timeStamp)
  const formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getFullYear() + ", " + current_datetime.getDate();
  return formatted_date;
}

const diffDate = (timeStamp) => {
  const date1 = new Date(timeStamp);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays; 
}

const sortList = (list, activeTab) => {
  const todayDate = new Date().getTime();
  let result;
  if (activeTab === 'upcoming') {
    result = list.filter((item) => {
      const currentDate = new Date(item.createdOn).getTime();
      return currentDate > todayDate;
    });
  } else if (activeTab === 'live') {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth();
    const y = today.getFullYear();
    result = list.filter((item) => {
      const currentDate = new Date(item.createdOn);
      const cd = currentDate.getDate();
      const cm = currentDate.getMonth();
      const cy = currentDate.getFullYear();
      return d === cd && m === cm && y === cy;
    });
  } else {
    result = list.filter((item) => {
      const currentDate = new Date(item.createdOn).getTime();
      return currentDate < todayDate;
    });
  }
  
  return result;
}

export {formatedDate, diffDate, sortList};