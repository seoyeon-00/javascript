//약수의 약수


//case1

function solution(data) {

    const arr = [];

    for(let i=1; i <= data; i++){
        if(data % i === 0){

            const result = [];

            for(let j = 1; j <= i; j++){
               i % j === 0 && result.push(j) 
            }

            arr.push(result.join(" "));
            
        }
    }

    return arr.join("\n");

}

console.log(solution(12));


//case2

function getLog(data){
    let arr = [];

    for(let i = 1; i <= data; i++){
        if(data % i === 0){
            arr.push(i);
        }
    }

    return arr;
}

function solution2(data){

    let arr2 = getLog(data);
    let result = [];

    for(let k of arr2){
        result.push(getLog(k).join(" "));
    }

    return result.join("\n");

}

console.log(solution2(12));




