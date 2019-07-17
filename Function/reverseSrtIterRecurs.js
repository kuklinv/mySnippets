const reverse = (str) => {
  let dlinaStr = str.length;
	const iter = (index, acc) => {
      if (index === dlinaStr) {
      	return acc;
      } else {
      	return iter (index + 1, `${str[index]}${acc}`);
      }
	}
return iter(0, '');
};

//const str = 'qwerty';
//str[1]; // => w
//str[10]; // => undefined