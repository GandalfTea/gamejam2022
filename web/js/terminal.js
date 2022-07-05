
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


/* GLOBAL VARS *********************/

var PRINT_CACHE = [];



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

function reprint() {}




/* HELPERS *************************/

function print( var msg ) {
	PRINT_CACHE.push(msg);	
	reprint()
} 




/* LOOP ****************************/

let input_command = "";

do {
	print("[agent name]$ ");	

} while ( input_command != ".quit" || input_command != ".q" || input_command != ".exit")
