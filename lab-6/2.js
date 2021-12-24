function matrixArray(num)
{
  var matrix = new Array();
  for(var i=0; i<num; i++){
    matrix[i] = new Array();
    for(var j=0; j<num; j++){
      matrix[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
	  if (i == j)
		matrix[i][j] = 1;
	  else if (j > i)
		  matrix[i][j] = 3;
	  else
		  matrix[i][j] = 8;
    }
  }
  return matrix;
}

function matrixWrite(matrix)
{
var str = "";
for (var i=0; i<9; i++)
{
	
	for (var j=0; j<9; j++)
	{
		str = str + matrix[i][j] + "|"
	}
	str = str + "\n-------------\n";
}
return str;
}

function Krat3(matrix)
{
	var kvo = 0;
	for (var i=0; i<9; i++)
	{
		
		for (var j=0; j<9; j++)
		{
			if(matrix[i][j] == 3)
				kvo ++;
		}
	}
	return kvo;
}
function SumChet(matrix)
{
	var chetstr = 0;
	var summ = new Array();
	for (var i=0; i<9; i++)
	{
		if (i%2 == 0)
		{
			summ[chetstr] = 0;
			for (var j=0; j<9; j++)
			{
				summ[chetstr] += matrix[i][j];
			}
		chetstr++;			
		}
	}
	return summ;
}
function ProizvChetElementOnNechetStolbtse(matrix)
{
	var NechetStolb = 0;
	var summ = new Array();
	for (var i=0; i<9; i++)
	{
		if (i%2 == 1)
		{
			summ[NechetStolb] = 1;
			for (var j=0; j<9; j++)
			{
				if (j%2 == 0)
					summ[NechetStolb] *= matrix[j][i];
			}
		NechetStolb++;			
		}
	}
	return summ;
}
function SummVishePobochDiag(matrix)
{
var sum = 0;
	for (var i=0;i<9;i++)
    {
        for (var j=0;j<9-i-1;j++)
            sum += matrix[i][j];
    }
  return sum;
}
function ZD_6(matrix)
{
	for (var i=0;i<9;i++)
    {
		if ((i+1)%2 == 0)
		{
			matrix[i] = matrix[i].sort();
		}
		if ((i+1)%2 == 1)
		{
			matrix[i] = matrix[i].sort().reverse();
		}
    }
  return matrix;
}

function Obrat(matrix)
{
	var matrixtemp = matrix;
	for(var i = 0; i < 9; i++)
	{
		for(var j = 0; j < 9; j++)
		{
			if(matrixtemp[i][j] == 8)
			{
				matrixtemp[i][j] = 3;
			}
			else if(matrixtemp[i][j] == 3)
			{
				matrixtemp[i][j] = 8;
			}
		}
	}
	return matrixtemp;
}

function Determinant(A)   // Используется алгоритм Барейса, сложность O(n^3)
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[ i ] = [];
       for (var j = 0; j < N; ++j) B[ i ][j] = A[ i ][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[ i ][ i ];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}

function AdjugateMatrix(A)   // A - двумерный квадратный массив
{                                        
    var N = A.length, adjA = [];
    for (var i = 0; i < N; i++)
     { adjA[ i ] = [];
       for (var j = 0; j < N; j++)
        { var B = [], sign = ((i+j)%2==0) ? 1 : -1;
          for (var m = 0; m < j; m++)
           { B[m] = [];
             for (var n = 0; n < i; n++)   B[m][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m][n-1] = A[m][n];
           }
          for (var m = j+1; m < N; m++)
           { B[m-1] = [];
             for (var n = 0; n < i; n++)   B[m-1][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m-1][n-1] = A[m][n];
           }
          adjA[ i ][j] = sign*Determinant(B);   // Функцию Determinant см. выше
        }
     }
    return adjA;
}

function InverseMatrix(A)   // A - двумерный квадратный массив
{   
    var det = Determinant(A);                // Функцию Determinant см. выше
    if (det == 0) return false;
    var N = A.length, A = AdjugateMatrix(A); // Функцию AdjugateMatrix см. выше
    for (var i = 0; i < N; i++)
     { for (var j = 0; j < N; j++) A[ i ][j] /= det; }
    return A;
}

function MultiplyMatrix(A,B)
{
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
          C[ i ][k] = t;
        }
     }
    return C;
}

var myMatrix = matrixArray(9);

WScript.Echo("Задание 1 \n\n"+matrixWrite(myMatrix));
WScript.Echo("Задание 2 \n\n" + Krat3(myMatrix));
WScript.Echo("Задание 3 \n\n" + SumChet(myMatrix));
WScript.Echo("Задание 4 \n\n" + ProizvChetElementOnNechetStolbtse(myMatrix));
WScript.Echo("Задание 5 \n\n" + SummVishePobochDiag(myMatrix));
WScript.Echo("Задание 6 \n\n" + matrixWrite(ZD_6(myMatrix)));
myMatrix = matrixArray(9); 
WScript.Echo("Determinant matrix (test)\n\n" + matrixWrite(Obrat(myMatrix)));
var Imatrix = InverseMatrix(myMatrix);
WScript.Echo(matrixWrite(Imatrix));
WScript.Echo(matrixWrite(myMatrix));
WScript.Echo(matrixWrite(MultiplyMatrix(Imatrix, myMatrix)));