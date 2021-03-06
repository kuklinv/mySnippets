function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

//var result = factorial(8);
//document.write(result);

/*
const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter > n) {
      return acc;
    }
    return iter(counter + 1, counter * acc);
  };

  return iter(1, 1);
};
*/