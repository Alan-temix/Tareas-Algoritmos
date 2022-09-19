const recursionFibonacci = (x = 1, y = 1, current, arr = [1, 1]) => {
  if(current > 4000000) {
    const sum = arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    console.log(sum);
    return;
  }
  current = x + y;
  x = y;
  y = current;
  arr.push(x)
  recursionFibonacci(x, y, current, arr);
}