


    var result = 0;

    for(var i = 1; i <= 200; i++){
        for(var j = 2; j <= i; j++){
            if(i % j == 0){
                break;
            }
        }

        if(i == j){
            result += j;
        }
    }
    

document.write("<br><br><br>");
document.write("결과값: " + result);