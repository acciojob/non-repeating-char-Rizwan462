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
const str = 'aabbccde';
const result = firstNonRepeatedChar(str);
console.log(result);
