Array.prototype.myEach = function(callback){
     for (let i = 0; i < this.length; i++){
        callback(this[i]);
     }
};

const callback1 = function(el){
    return el*el;
};

// [1,2,3,4].myEach((el) => { console.log(el*el);});

// [1,2,3,4].myEach(callback1);

const myMap = function(callback){
    let arr = [];

    return function(newArr){
        newArr.myEach(callback);
        console.log(arr);
    }
};

const banana = myMap(callback1);
banana([1,2,3,4]);