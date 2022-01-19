#include <iostream>
#include <cmath>
using namespace std;
double x = 0.;
double h = 0.005;

int main()
{
do
{
std::cout << "F(" << x << ") = " <<  sin(x) << endl;
x += h;
std::cout << "1"
} while (true);

return 0;
}
