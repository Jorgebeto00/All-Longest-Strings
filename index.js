function allLongestStrings(inputArray) {
	let arrStr = inputArray;
	let arrLen = [];
	let arrPos = [];
	

	for(let i = 0; i < arrStr.length; i++){
		//console.log(i);
		arrPos.push(i);
		arrLen.push(arrStr[i].length);
		
	}
	let max = Math.max(arrLen);
	return arrLen;
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);
