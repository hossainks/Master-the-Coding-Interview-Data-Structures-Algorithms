function stackExample(n) {
  if (n <= 0) return; // Base case
  console.log(n); // Each call adds to the stack
  stackExample(n - 1); // Recursive call
}

stackExample(5);
