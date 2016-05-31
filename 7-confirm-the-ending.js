function confirmEnding(str, target) {
  return target === str.substring( (str.length - target.length),str.length);
}

confirmEnding("Bastian", "n");