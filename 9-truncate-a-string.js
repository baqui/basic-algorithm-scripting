function truncateString(str, num) {
  number = num < 3 ? num : num - 3;
  return str.length > num ? str.substring(0, number) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
