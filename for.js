var x = 0
var i;
for ( i=1;i<=100;i++ ){
    x = x+i
};
alert(x);

var array = ['Google','Microsoft','Facebook'];
var i, y;
for (i=0; i<array.length; i++) {
    y = array[i]
    alert(y);
};

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for(var i in o){
    alert(i);
    alert(o[i]);
}

var a = 0;
var b = 99;
while (b > 0){
    a = a + b;
    b = b - 2;
}
alert(a);

n = 0
do {
    n = n + 1
}while (n < 100);
alert(n);

var arr = ['A','B','C'];
var c, d;
for (c=0;c<arr.length;c++){
    d = arr[c];
    alert('Hello'+d);
};