
#include <cassert>
#include <string.h>
#include <vector>

#include "similarity.h"
#include "core.h"

#ifdef __cplusplus
	#define MAX_INPUT_LENGTH 8192
#endif

// Debug


#define DEBUG 1

namespace gamejam {

// Check for char shift encryption
bool check_shift( char* origin, gamejam::hash encry ) {

	assert( !( strlen(origin) > strlen(encry) )); // Insta fail, not enough entropy
	
	if( strlen(origin) == strlen(encry)) {
		if( strcmp(origin, encry) == 0 ) return 1;

		for( int16_t i=-128; i <= 127; i++) {
			char decrypt[strlen(encry)];
			for( size_t j{}; j < strlen(encry); j++) {
				// TODO: do not start here, but keep the relationship between the letters
				decrypt[j] = (char)(encry[j] + i);
			}
			for(auto i : decrypt) {
				std::cout << (int)i << " ";
			}
			if( get_similarity((const char*)decrypt, origin) > 0.95) return 1;
			std::cout << "\n";
		}
		
	} else {
		// Either noisy shift or false
		return 0;
	}
}

} // namespace



using namespace gamejam;
using namespace std;

int main( int* argc, char** argv ) {

	//double similarity = get_similarity( "Testing now, hello", "Testing now, hellow");
	std::cout << check_shift("Test", "Uftu");
	return 0;
}

