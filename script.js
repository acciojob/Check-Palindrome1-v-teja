// complete the given function

function palindrome(str){
	var start =0;
	var end = str.length-1;
	while(start<end){
		var charA = str.charAt(start);
		var charB = str.charAt(end);
		if(charA==' '){
			start++;
		}
		if(charB==' '){
			end--;
		}
		if(charA!=" " && charB!=" "){
			if(charA!=charB){
				return true;
			}
			start++;
			end--;
		}
	}
return true;
}
module.exports = palindrome
