var x = -1; 
for (var i = -1; i<1; i = i+0.001)
{ 
	x= 1 / Math.tan(i); 
	WScript.Echo(x);
} 
