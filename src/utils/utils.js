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

const sortList = (list) => {
  list.sort((a, b) => {
    return a.createdOn - b.createdOn;
  });
  return list;
}

export {formatedDate, diffDate, sortList};