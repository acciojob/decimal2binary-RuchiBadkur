
function decimalToBinary(num) {
  //Write you code here
  if(num === 0 || num === 1){
	  return num;
  } else{
	decimalToBinary(Math.floor(num/2)) + (num%2);
	}
}

window.decimalToBinary = decimalToBinary;
