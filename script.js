
function decimalToBinary(num) {
  //Write you code here
  let res = "";
	while(num >= 1){
		res = num%2 + res;
		num = Math.floor(num/2);
	}
}

window.decimalToBinary = decimalToBinary;
