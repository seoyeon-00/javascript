

var input = ["f", "w", "a", "g", "e"];
var input2 = [2, 200, 4, 74, 92];

input.sort();
input2.sort();

document.write(input+"<br>");
document.write(input2+ "<br>");



var arrary = [2, 200, 4, 74, 92, 25];
var arrary2 = ["바나나","딸기", "사과", "수박", "키위", "오렌지"];

//오름차순(숫자)
function ascending(a,b) {
    return a-b;
}

//오름차순(문자)
function ascending2(a,b) {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a == b) return 0;
}

document.write(arrary2.sort(ascending2));


//내림차순(숫자)
function descending(a,b) {
    return b-a;
}
//내림차순(문자)
function descending2(a,b) {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a == b) return 0;
}

document.write(arrary.sort(descending));
document.write(arrary2.sort(descending2));

