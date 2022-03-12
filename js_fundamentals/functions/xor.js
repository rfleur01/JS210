function isXor(arg1, arg2) {
  if (!arg1 && arg2) {
    return true;
  } else if ((arg1 && !arg2)) {
    return true;
  } else {
    return false;
  }
}