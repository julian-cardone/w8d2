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

Array.prototype.myMap = function(callback){
    let arr = [];
        //closure: a function within a function has access to the outer functions scope: arr, callback
        //the callback in myEach is different than the passed in callback
    this.myEach(function(ele){
        arr.push(callback(ele));
    })

    return arr;
};

// console.log([1,2,3,4].myMap(callback1));

