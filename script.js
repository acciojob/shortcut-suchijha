function shortcut(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return "";
}
	let firstCharStr1 = s1[0];
let firstCharStr2 = s2[0];
	let output = firstCharStr1 + firstCharStr2;
	return output;
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
