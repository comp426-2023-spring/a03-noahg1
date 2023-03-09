#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

let argv = minimist(process.argv.slice(2))

const help = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

                    - Scissors CUTS Paper
                    - Paper COVERS Rock
                    - Rock SMOOSHES Lizard
                    - Lizard POISONS Spock
                    - Spock SMASHES Scissors
                    - Scissors DECAPITATES Lizard
                    - Lizard EATS Paper
                    - Paper DISPROVES Spock
                    - Spock VAPORIZES Rock
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
    console.log(JSON.stringify(rpsls(shot))); // Shows who won
} catch (error) {
    // In case player inputs something invalid the help and rules will show
    console.log(help);
    console.log(rules);
    process.exit(1);
}