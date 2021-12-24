int x = 0;
var memory = 1;
var n = 5;
WScript.Echo("1");
for (var i = 1 ;i<n;i++){
x = Math.log(memory*(i+1))-13;
WScript.Echo(x);
memory = x;
}