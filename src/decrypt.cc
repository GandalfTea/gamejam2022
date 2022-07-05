
#include <iostream>
#include <cassert>
#include <string.h>
#include <vector>

#ifdef __cplusplus
	#define MAX_INPUT_LENGTH 8192
#endif

// Debug
#ifdef DEBUG
	#define LEVENSHTEIN_DEBUG
#endif

namespace gamejam {


typedef const unsigned char uchar;
//typedef std::vector<uchar> hash;
typedef const char* hash;


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


/* Compute the similarity ( Levenshtein distance ) between an encrypted entity and 
   a c string. This returns a value from 0 - 1 that serves as the similarity index */

int get_lovenshtein( const char* origin, gamejam::hash encry) {
	int m = strlen(origin);
	int n = strlen(encry);

	int Mat[m+1][n+1]{};
	for( int i=1; i <= m; i++) {
		Mat[i][0] = i;
	}

	for( int i=1; i <= n; i++) {
		Mat[0][i] = i;
	}

	for( int i=1; i<=m; i++) {
		for( int j=1; j<=n; j++) {
			int weight = origin[i-1] == encry[j-1] ? 0 : 1;
			Mat[i][j] = std::min( std::min( Mat[i-1][j] + 1, Mat[i][j-1] + 1), Mat[i-1][j-1] + weight);
		}
	}

	// Debug print matrix
	
#ifdef LEVENSHTEIN_DEBUG
	std::cout << "\n";
	for( int i=0; i<=m; i++) {
		std::cout << "\t";
		for( int j=0; j<=n; j++) {
			std::cout << " " + std::to_string(Mat[i][j]);
		}
		std::cout << "\n";
	}
#endif

	std::cout << Mat[m][n] << std::endl;
	return Mat[m][n];
}

double get_similarity( const char* origin, gamejam::hash encry) {
	double max_length = std::max(strlen(origin), strlen(encry));
	if(max_length > 0) {
		return(max_length - get_lovenshtein(origin, encry)) / max_length;
	}
	return 1.0;
}

} // namespace



using namespace gamejam;
using namespace std;

int main( int* argc, char** argv ) {

	double similarity = get_similarity( "Testing now, hello", "Testing now, hellow");
	return 0;
}

