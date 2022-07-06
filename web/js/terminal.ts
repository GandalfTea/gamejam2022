
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

import new_logo from "./logo.js";


/* GLOBAL VARS *********************/

var PRINT_CACHE: Array<string> = [];
var USER: string = "Octavian";


// Initial welcome text
for(var i = 0; i < 15; i++) {
	PRINT_CACHE.push("<br>")
}
PRINT_CACHE.push(new_logo);
for(var i = 0; i < 3; i++) {
	PRINT_CACHE.push("<br>")
}

PRINT_CACHE.push("Starting up...<br>")
PRINT_CACHE.push("Initializing onion routing connection...<br>")
PRINT_CACHE.push("Setting up initial connection [ ######################################### ] 100% <br>")
PRINT_CACHE.push("Securing SSH Keys [ ##################################################### ] 100% <br>")
PRINT_CACHE.push("<br><br>MISSION MARTIN GUERRE [0.453]: Impersonate and replace ERIC REECE.<br><br>")
PRINT_CACHE.push("Login : <input id='terminal-input' type='text'></input> <br>")
reprint();
const input = document.getElementById("terminal-input");
input.focus();
input.addEventListener("keypress", (e) => {
	if(e.key === "Enter") {
		e.preventDefault();
		USER = input.value;
		input.remove();
		print(`Login : ${USER}`, true);
				PRINT_CACHE.push(`<br><br>Private Key: <br>
				-----BEGIN RSA PRIVATE KEY-----<br>
				MIIEogIBAAKCAQEA5fI1ib50tMn23Y2J35KFYpH2LQ3CvEbcDN5X9zTcCocRLW5A
				VGubQV1jVFIZRHWw9qLvbLdmWo2arzblrkFJbaeOTazks76GeCCctpKbfW9CUZdh
				v9bWwkQe+HPxpsjAFq4KHmSQcLEJVKhf9OpO31wEMiRRiod/SY10U/m6VbPRbPLa
				yS4mnxx84wQespWag39i4xepgZ/trLOfeqdYDf9ih5mpeuGYCUZ+KqIZ+ie05bKP
				mzp9QP9WiEjhcNGURfqFjspbamU223X3KLgIA20EWGUiBGK7dG4n+64H0ZKfdzkn
				2SnQtL8FhycoxhzBA8SgKmbm2b9fMnTwcxrotQIDAQABAoIBAAqbTIrpBRsdwcxg
				bf6pFIwCbZeQbe4fWqEhVG9rucamik1NK5x5RjUSqLVIADBfOWV3CJI8N3Vv2LXC
				U3/hNRDgzLiahAYigLNj1ba6Nn/ntOhski62KzvUxpTxTDFES1AAgSj7vInmMKb+
				CUcT08WLygnCERzRuTZcVwRUnZq8VT/+Vu2AAT6AvkFf0UtDqrqb7KajNrB8hF8n
				0a5CDrwLPhJcRjVDo8Vuew71X/JdOG2CUP1y/vja6RGo/pzpD6g4Wmgw0ZZIVCDq
				QhL0jBpU6RUsCGDbeWttr0b9UVYc3iF6Xt/gEAlfPSnL0uENEWXZyidwDhlq+5YX
				mSjCQzUCgYEA/3Ph3qUtZKKYFT7Z9t8ALRiG7yUevn5D82XLilzJDAhvhouqCWDz
				iy8ZX0uc0vYmoaZ8vtn1+y5jh23KzQrqzdJJBGMKxVpdaG9DKvGFhtnQoMS/chlh
				CRsVCTs4oR8MWR8lAT8oTy+v9d/gYSYoDYD1RSNg83MiOJNbmsvGFVMCgYEA5nBW
				GAPp1H0887LkviJCLvt4jp/AZ/KTCMkicZXNnWUAu8DMGDjv6QZcKdfJKOPlD/eW
				0jblHj4lbVRpOWm9ZrwunVMbfLvG50yUGcSm2wXJ1EjG1jRbA9LGueuuiQrq293r
				+w2a4FRB6TQxIM7KZ+UcwaUyBpWFm7u04MJlANcCgYBNNVkvUf1GTV5qDXUTiJMl
				DiS6Yx3HtaIUDtBWIXUijeonYE8kRolVqAajJtdfa8aBVTCe/oG6SWsLo8OH9aTC
				UKyBBu5ad9WDmx1R/W2+NFc6QD0c307U0bqp75xOFnRE+4TTu6MTS/aC+gd3VXEF
				o9R98RN8gW/2aZNmVfCowQKBgFthrvKFEsQ+Cd7GUWmI4mAJPyyn80AFdQNl56/N
				bSV+eUT7VrRAV/s7l27McKwze5HSaE/ijwdoM6VgdP3cjcxg0cd3vo2/VUhCGPUD
				A/wVFo2FcrxdNL6WZlIyQRt9Zddc8Qi0w3c0UpLtLJJLDv8WX0n3fZgY0UwJqtf6
				nt0vAoGAQdG64xvg8ol2s5Ig15ivFsxVPEIfPoR1EjVS7/oGnsYndSpnJfE3spUs
				Wpye9LqYDqNDhMziAtmqjtOCAPG/LlWoprTU99rHOXA9kOv87zi1IqEAjqhsroy9
				Djrs/s/QB5/fAKyl7DSyyUCEa3FTS7qofJQEYNCOW9RTIIFad7c=
				<br>-----END RSA PRIVATE KEY-----<br><br>`)
				PRINT_CACHE.push("Validating checksums [ ##################################################### ] 100% <br>")
		print(`<br><br>Hello, comrade ${USER} [00897431:991], we will now explain your mission.`);
		print("<br><br>Eric Reece [ 1909 - yesterday ] is the Premier of Tasmania. You are to infiltrate his daily life and impersonate him, build trust with his peers and grow your sphere of influence inside of the country. You do not need to worry about the real Eric Reece. Next, we will give you background information about the subject.");
		reprint();
		loop();
	}
})


/* ERROR HANDLING ******************/

enum MetaCommandSuccess {
	META_COMMAND_SUCCESS,
	META_COMMAND_UNRECOGNIZED_COMMAND,
	META_COMMAND_UNEXPECTED_ERROR,
};

enum CommandSuccess {
	COMMAND_SUCCESS,
	UNRECOGNIZED_COMMAND,
	COMMAND_UNEXPECTED_ERROR,
};


/* DOM HANDLING ********************/

function reprint() {
	document.getElementById("terminal").innerHTML = serialize( PRINT_CACHE ) ;
}

/* HELPERS *************************/

function print( msg: string, cleanHTML:boolean=false):void {
	PRINT_CACHE.push(msg);	

	// Remove HTML elements from history
	if(cleanHTML) {
		for( const i in PRINT_CACHE) {
			if(PRINT_CACHE[i].includes("</input>")) {
				PRINT_CACHE.splice(i, 1);
			}
		}
	}
	reprint()
} 


function ainput() {

	print(`<br>[ ${USER}@server ~ ] $ `);
	print("<input id='terminal-input' type='text'></input>");
	const input = document.getElementById("terminal-input");
	input.focus();

	return new Promise( resolve => {
		input.addEventListener("keypress", (e) => { 			// The event listener is removed with the element
			if(e.key === "Enter") {
				// Remove input and replace with text
				e.preventDefault();
				const cmd = input.value;
				input.remove();
				print(cmd, true);
				resolve(cmd);
			}
		});
		//input_command = ".quit";
	})
}

function execute( command:string ) {
	return new Promise( resolve => {
		if( command === ".help" || command==="help") {
			print("<br><br>GNU bash, version 4.4.23(1)-release (x86_64-pc-msys)");
			print("<br>The following commands are defined internally.<br>")
			print("<br>mission [&] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gives details about the current mission");
			print("<br>save &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; saves the game at current timeframe");
			print("<br>clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; clears the console");
			print("<br>exit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; exit the console<br>");
		} else if ( command === "clear" ) {
			print("<br>clear has not been implemented yet :(")
		} else {
			print("<br>Unrecognized command. Use .help for help.")
		}
		resolve();
	})
}


// Serialize the local cache into terminal-friendly format
function serialize( cache: Array<string> ) {
	var ret = "";
	for( const str in cache ) {
		ret += cache[str] + "\n";
	}
	return ret;
}




/* LOOP ****************************/

let input_command = "";

async function loop() {
	do {
		const cmd:string = await ainput();
		await execute(cmd);

	} while ( input_command != ".quit")
}

