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

// console.log([0,1,2,-1,-2].twoSum());

// arr = [[1,2],[3,4]]
// trans=[]
// (0...arr.length).each do |col|
//   subarr=[]
//   arr.each do |el|
//       subarr << el[col]
//   end
//     trans << subarr
// end

// print trans

Array.prototype.transpose = function(){
    let arr=[];
    for(let i = 0;i < this.length; i++){
        let subarr = [];
        for(let j = 0;j < this.length; j++){
            subarr.push(this[j][i]);
        }
        arr.push(subarr);
    }
    return arr;
}

console.log([[1,2],[3,4]].transpose());

