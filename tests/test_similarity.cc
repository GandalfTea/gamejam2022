
#include "../include/core.h";
#include "../include/similarity.h";

#include <cassert>
#include <cmath>
#include <iomanip>

#define EPSILON 0.00001

using namespace std;
using namespace gamejam;


bool compare( float a, float b) {
	return fabs(a-b) <= EPSILON;
}

int main() {
	std::cout << std::fixed << std::setprecision(50);

	assert( get_similarity("Hello", "Hello") == 1);	
	assert( compare( get_similarity("std::string", "C-string"), 0.545455));
	std::cout << "\nPass\n";
}
