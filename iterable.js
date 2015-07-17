var arr = ['A','B','C'];
var n = new Map ([['J',1],['H',2],['K',3]]);
var s = new Set (['A','B','C']);
for (var x of arr){
    alert(x);
}
for (x of s){
    alert(x);
}
for (var x of n){
    alert(x[0] + '=' + x[1]);
}


var arr = [1,2,3];
arr.name = 'Hello';
for(x in arr){
    alert(x);
}

var arr = [1,2,3];
arr.name = 'Hello';
for (x of arr){
    alert(x);
}

var arr = [1,2,3];
arr.forEach(function(element,index,array){
    alert(array);
});



