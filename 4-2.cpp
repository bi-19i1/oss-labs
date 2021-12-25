#include <iostream>
#include <cmath>
using namespace std;
double x = 0.;
double h = 0.05;
int main()
{
do
{
std::cout << "F(" << x << ") = " <<  cos(x) << endl;
x += h;
} while (true);

return 0;
}
