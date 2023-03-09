export { rps, rpsls }

let result = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

function rps(shot) {
    //Rock Paper Scissors 
    

    let choices = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random() * 3)
    let c = choices[choice]

    if(shot == null){return {player : c}} //If no input player loses
    shot = shot.toLowerCase()

    if (!(options.includes(shot))) {
        console.error(`${shot} is not an option`);
        throw new RangeError();
    }

    return {player: shot, opponent: c, result: result[c][shot]}

}

function rpsls(shot) {
    //Rock Paper Scissors Lizard Spoc
    

    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    let choice = Math.floor(Math.random() * 5)
    let c = choices[choice]

    if(shot == null){return {player : c}} //If no input player loses
    shot = shot.toLowerCase()

    if (!(options.includes(shot))) {
        
        throw new RangeError();
    }

    return {player: shot, opponent: c, result: result[c][shot]}

}
    
