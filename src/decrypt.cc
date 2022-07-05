
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

	//assert( !( strlen(origin) < strlen(encry) ); // Insta fail, not enough entropy
	
	if( strlen(origin) == strlen(encry)) {
		if( strcmp(origin, encry) ) return 1;

		for( size_t i; i < 255; i++) {
			char* decrypt[strlen(origin)];
			for( size_t j; j < strlen(origin); j++) {
				decrypt[i] = (char*)origin[j] + i;
			}
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

	double similarity = get_similarity( "Testing now, hello", "Testing now, hellow");
	return 0;
}

