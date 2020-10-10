function allLongestStrings(inputArray) {
	let arrStr = inputArray;
	let arrLen = [];
	let arrPos = [];
	let arrFinal = [];
	

	for(let i = 0; i < arrStr.length; i++){
		arrPos.push(i);
		arrLen.push(arrStr[i].length);
	}

	let max = Math.max(...arrLen);

	for(let x = 0; x < arrStr.length; x++){
		if(arrStr[x].length === max){
			arrFinal.push(arrStr[x]);
		}
	}
	
	return arrFinal;
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);
