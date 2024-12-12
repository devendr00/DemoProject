const sortfun = (data, key, mode) => {
  return [...data].sort((i, j) => {
    if (mode == true) {
      if (i[key].toLowerCase() > j[key].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (i[key].toLowerCase() < j[key].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    }
  });
};

export default sortfun;
