const generateStringDateTime = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month} ${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export default generateStringDateTime;
