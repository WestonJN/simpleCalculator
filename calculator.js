function add(a,b){
    return a + b;
}

module.exports = {
    add,
    multiply,
    sum,
    product
}

function multiply(a,b){
return a * b;
}
function sum(){
    var sum=0;
    for (i=0;i<=arguments.length;i++){
        sum += i;
    } return sum;
   
    }

    function product(){
        var product=1;
        for (i=1;i<=arguments.length;i++){
            product *= i;
        } return product;
       
        }
   