function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  arr = arr.filter(Boolean);
  return arr;
}

// bouncer([7,"",  false, 9]);
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
