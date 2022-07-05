
/* LOGIC ***************************
 	
	Input Command:
		IF command exists:
			Execute
		ELSE:
			Error

	Input Hash:
		IF hash is decrypted:
			FAIL
		ELSE:
			WIN

	Store printed information in local memory cache
	Once cache has, issue a reprint

************************************/

import logo from "logo.js";


/* GLOBAL VARS *********************/

var PRINT_CACHE = [];

// Initial welcome text
PRINT_CACHE.push(logo);


/* ERROR HANDLING ******************/

enum MetaCommandSuccess {
	META_COMMAND_SUCCESS,
	META_COMMAND_UNRECOGNIZED_COMMAND,
	META_COMMAND_UNEXPECTED_ERROR
}

enum CommandSuccess {
	COMMAND_SUCCESS,
	UNRECOGNIZED_COMMAND,
	COMMAND_UNEXPECTED ERROR
}


/* DOM HANDLING ********************/

function reprint() {
	document.getElementById("terminal").innerText = serialize( PRINT_CACHE );
}


/* HELPERS *************************/

function print( var msg ) {
	PRINT_CACHE.push(msg);	
	reprint()
} 

// Serialize the local cache into terminal-friendly format
function serialize( var cache ) {
	var ret = "";
	for( const str in cache ) {
		ret += str + "\n";
	}
	return ret;
}




/* LOOP ****************************/

let input_command = "";

do {
	print("[agent name]$ ");	
	// accept input >> input_command

} while ( input_command != ".quit" || input_command != ".q" || input_command != ".exit")
