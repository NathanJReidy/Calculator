function add(a, b) {
	return a + b;
  }
  
  function subtract(a, b) {
	return a - b;
  }
  
  function sum(array) {
	return array.reduce((total, current) => total + current, 0);
  }
  
  function multiply(array) {
	  return array.length
		? array.reduce((accumulator, nextItem) => accumulator * nextItem)
		: 0;
  }
  
