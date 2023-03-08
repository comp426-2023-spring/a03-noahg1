import minimist from "minimist";
import { rps } from "../lib/rpsls";

let argv = minimist(process.argv.slice(2))

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

const rules = `Rules for Rock Paper Scissors:
                      - Scissors CUTS Paper
                      - Paper COVERS Rock
                      - Rock CRUSHES Scissors`;


//If statement to show help
if (argv.help || argv.h) { 
    console.log(help);
    process.exit(0);
}

//If statement to show rules
if (argv.rules || argv.r) {
    console.log(rules);
    process.exit(0);
}

let shot = argv._[0] //Players choice

try {
    console.log(JSON.stringify(rps(shot))); // Shows who won
} catch (error) {
    // In case player inputs something invalid the help and rules will show
    console.log(help);
    console.log(rules);
    process.exit(1);
}