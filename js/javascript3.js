//뒤틀린 구구단


//case1

function solution() {

    let arr = [];

    for(let i = 2; i <= 9; i++){
        for(let j = 1; j <=9; j++){
            arr.push([i, j, i * j]);
        }
    }

    return arr
    .sort((a,b) => a[2]-b[2])
    .map((it) => `${it[0]} * ${it[1]} = ${it[2]}`)
    .join("\n");

}

console.log(solution());


//case2


function solution2(){
    let result_dict = {};
    let result = [];

    for(let i = 2; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            result_dict[i + " * " + j] = i*j;
        }
    }

    result_dict = Object.entries(result_dict).sort((a,b) => a[1] - b[1]);

    for (let [k, v] of result_dict){
        result.push(k + " = " + v);
    }

    return result.join("\n");

}

console.log(solution2());




