function getDateInRange(date, lastDate, dates = []) {
  const format = 'YYYY-MM-DD';
  if (new Date(date).getTime() < new Date(lastDate).getTime()) {
    dates.push(formatDate(date, format));
    const nextDay = date.getDate() + 1;
    const newCurrentDate = new Date(new Date().setDate(nextDay));
    return getDateInRange(newCurrentDate, lastDate, dates);
  }
  return dates;
}


function formatDate(date, format) {
  const dateWithSeparator = (date, sep) => date.getDate() + sep + date.getMonth() + sep + date.getFullYear()
  const dateISOString = (date, withTime) => {
    if (withTime) {
      return date.toISOString().split('T').join(' ').split('.')[0]
    } else {
      return date.toISOString().split('T')[0]
    }
  }

  const formats = {
    'YYYY-MM-DD': dateISOString,
    'YYYY-MM-DD HH:MM:SS': (date) => dateISOString(date, true),
    'DD/MM/YYYY': (date) => dateWithSeparator('/'),
    'DD-MM-YYYY': (date) => dateWithSeparator(date, '-')
  };

  return formats[format] ? formats[format](date) : "Invalid Format";
}

