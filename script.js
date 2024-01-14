function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length === 0){
		return "null";
	}
	let charcont = {};
	for(let char of str){
		charcount[char] = (charcont[char] || 0)+1;
	}
	for(let char of str){
		if(charcont[char] === 1){
			return char;
		}
	}
	return "null";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
console.log(result);
