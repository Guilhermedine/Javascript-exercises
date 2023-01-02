var numeros = [48 , 20 , 30]

const sorted = (arr) => {
    let second_index;
	for(let first_index = 0; first_index < arr.length; first_index++){
  	  second_index = first_index + 1;
      if(arr[second_index] - arr[first_index] < 0) return false;
    }
    return true;
}
console.log(sorted(numeros))
