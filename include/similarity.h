
#include <iostream>
#include <cstring>
#include "core.h";


#ifdef DEBUG
	#define LEVENSHTEIN_DEBUG
#endif

/* Compute the similarity ( Levenshtein distance ) between an encrypted entity and 
   a c string. This returns a value from 0 - 1 that serves as the similarity index */

int get_levenshtein( const char* origin, gamejam::hash encry) {
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
	std::cout << "\n\t Similarity: " << Mat[m][n] << std::endl;
#endif

	return Mat[m][n];
}

double get_similarity( const char* origin, gamejam::hash encry) {
	double max_length = std::max(strlen(origin), strlen(encry));
	if(max_length > 0) {
		return(max_length - get_levenshtein(origin, encry)) / max_length;
	}
	return 1.0;
}
