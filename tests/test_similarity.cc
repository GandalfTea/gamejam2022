
#include "../src/decrypt.cc";
#include "../include/core.h";

#include <cassert>

using namespace std;
using namespace gamejam;


int main() {
	assert( get_similarity("Hello", "Hello") == 1);	
}
