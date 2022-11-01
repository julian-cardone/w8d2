Array.prototype.uniq = function() {

    let firstNum = [];

    for (let i = 0; i < this.length; i++){
        if (!firstNum.includes(this[i])){
            firstNum.push(this[i]);
        }
    }

    return firstNum;
}

// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function(){
    let arr = [];

    for (let i = 0; i < this.length; i++){
        for (let j = 1; j < this.length; j++){
            if (this[i] + this[j] === 0 && i < j){
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

console.log([0,1,2,-1,-2].twoSum());