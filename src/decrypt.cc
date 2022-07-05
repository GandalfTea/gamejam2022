
#include <iostream>
#include <cassert>
#include <string.h>
#include <vector>

#ifdef __cplusplus
	#define MAX_INPUT_LENGTH 8192
#endif

using namespace std;


namespace gamejam {


typedef const unsigned char uchar;
typedef std::vector<uchar> hash;


// Check for char shift encryption
void check_shift( const char* origin, gamejam::hash encry ) {

	assert( !(origin.length() < encry.length()) ); // Insta fail, not enough entropy
	
	if( strlen(origin) == encry.length()) {
		if( strcmp(origin, encry) ) return 1;


		
	} else {
		// Either noisy shift or false
		return 0;
	}
}

} // namespace



using namespace gamejam;

int main( int* argc, char** argv ) {
	cout << C << endl;
	return 0;
}

