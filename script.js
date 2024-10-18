const toss = document.getElementById('toss');
const playAgain = document.getElementById('playAgain');

/**
 * 
 * Simulates a coin toss to determine which team wins the toss in a cricket match.
 * Updates the DOM to display the result of the toss.
 *
 * @param {string} team1 - The name of the first team.
 * @param {string} team2 - The name of the second team.
 * @param {number} overs - The number of overs for the match.
 */
let tossWon = '';
function FlipTheCoin(team1, team2, overs) {
    const selectTeam = document.getElementById('selectTeam').value;
    const selectCoinSide = document.getElementById('selectCoinSide').value;
    const TossResult = Math.floor(Math.random()  * (2 - 1 + 1) + 1);
    const teamName1 = document.getElementById('teamName1');
    const teamName2 = document.getElementById('teamName2');
    alert(TossResult);
    h2.style.color = 'orange';

    if (TossResult === 1) {
        h2.textContent = `Team ${team1} won the toss (${overs} overs match)`;
        teamName1.textContent = team1;
        teamName2.textContent = team2;
        tossWon = team1;
    }else{
        h2.textContent = `Team ${team2} won the toss (${overs} overs match)`;
        teamName1.textContent = team2;
        teamName2.textContent = team1;
        tossWon = team2;
    }

    announcement.appendChild(h2);

    document.getElementById('t-1').value = '';
    document.getElementById('t-2').value = '';
    document.getElementById('overs').value = '';
    
    const tossWrapper = document.getElementById('tossWrapper');
    tossWrapper.style.display = 'none';
}

/**
 * Validates the input fields for team names and overs.
 * If any of the fields are empty, it alerts the user to enter all fields and clears the input fields.
 * If all fields are filled, it calls the FlipTheCoin function with the provided inputs.
 */
let team1 = '';
let team2 = '';
let totalOvers = '';
let announcement = '';
let h2 = document.createElement('h2');
function validateInputs() {
    team1 = document.getElementById('t-1').value;
    team2 = document.getElementById('t-2').value;
    totalOvers = parseInt(document.getElementById('overs').value);
    announcement = document.getElementById('announcement');
    
    if( team1 === '' || team2 === '' || totalOvers === ''){
        document.getElementById('t-1').value = '';
        document.getElementById('t-2').value = '';
        document.getElementById('overs').value = '';
        // alert('Please enter all the fields');
        h2.style.color = 'red';
        h2.textContent = 'Please enter all the fields';
        announcement.appendChild(h2);
        return false;
    }else{
        FlipTheCoin(team1, team2, totalOvers);
    }
}

// current overscore display
function currentOver(counter,update){

    if(counter === 7){
        ballByBall.textContent = '';
        ballByBall.textContent += `${update} `;
    }else if(counter === 1){
        ballByBall.textContent = '';
        ballByBall.textContent += `${update} `;
    }else{
        ballByBall.textContent += `${update} `;
    }
}

let scoreValue = 0;
let wicketsValue = 0;
let oversValue = 0;
let noOfBalls = 0;
let flag = true;
let counter = 0;
const h3 = document.createElement('h2');
const displayScore = document.getElementById('displayScore');
const ballByBall = document.getElementById('ballByBall');
ballByBall.style.color = 'white';
function firstInnings(update){
    const score = document.getElementById('score1');
    const wickets = document.getElementById('wickets1');
    const overs = document.getElementById('overs1');
    h3.style.color = 'rgb(13, 90, 153)';

    if(update === 1){
        scoreValue += 1;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;
    }else if(update === 0){
        noOfBalls += 1;
        counter += 1;
    }else if(update === 2){
        scoreValue += 2;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;

    }else if(update === 3){
        scoreValue += 3;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;

    }else if(update === 4){
        scoreValue += 4;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;

    }else if(update === 5){
        scoreValue += 5;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;

    }else if(update === 6){
        scoreValue += 6;
        noOfBalls += 1;
        counter += 1;
        score.textContent = scoreValue;

    }else if(update === 'wide'){
        scoreValue += 1;
        score.textContent = scoreValue;

    }else if(update === 'out'){
        wicketsValue += 1;
        noOfBalls += 1;
        counter += 1;
        wickets.textContent = wicketsValue;
    }else if(update === 'noBall'){
        scoreValue += 1;
        score.textContent = scoreValue;
    }

    // current overscore display
    currentOver(counter, update);
    
    // change over when 6 balls are bowled
    if(noOfBalls === 6){
        oversValue += 1;
        noOfBalls = 0;
        overs.textContent = oversValue;
    }else{
        overs.textContent = `${oversValue}.${noOfBalls}`;
    }
    

    if (wicketsValue === 10) {
        wickets.textContent = wicketsValue;
        flag = false;
        h3.textContent = 'All out';
        announcement.appendChild(h3);
        return;
    }else if (oversValue === totalOvers) {
        flag = false;
        h3.textContent = 'Innings Over';
        announcement.appendChild(h3);
        return;
    }
}

let scoreValue2 = 0;
let wicketsValue2 = 0;
let oversValue2 = 0;
let noOfBalls2 = 0;
let counter2 = 0;

function secondInnings(update, h2){
    const score2 = document.getElementById('score2');
    const wickets2 = document.getElementById('wickets2');
    const overs2 = document.getElementById('overs2');
    const buttons = document.getElementById('buttons')
    const hideScore = document.getElementById('scores');
    h3.textContent = '';
    h3.style.color = 'orange';
    h3.style.fontSize = '3rem';

    if(update === 1){
        scoreValue2 += 1;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 0){
        noOfBalls2 += 1;
        counter2 += 1;
    }else if(update === 2){
        scoreValue2 += 2;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 3){
        scoreValue2 += 3;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 4){
        scoreValue2 += 4;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 5){
        scoreValue2 += 5;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 6){
        scoreValue2 += 6;
        noOfBalls2 += 1;
        counter2 += 1;
        score2.textContent = scoreValue2;

    }else if(update === 'wide'){
        scoreValue2 += 1;

        score2.textContent = scoreValue2;

    }else if(update === 'out'){
        wicketsValue2 += 1;
        noOfBalls2 += 1;
        counter2 += 1;
        wickets2.textContent = wicketsValue2;

    }else if(update === 'noBall'){
        scoreValue2 += 1;
        score2.textContent = scoreValue2;
    }

    // current overscore display
    currentOver(counter2,update);

    // for increment of overs
    if(noOfBalls2 === 6){
        oversValue2 += 1;
        noOfBalls2 = 0;
        overs2.textContent = oversValue2;
    }else{
        overs2.textContent = `${oversValue2}.${noOfBalls2}`;
    }

    // check if team 2 won the match or match draw or loss
    if ((scoreValue2 < scoreValue) && (oversValue2 === totalOvers || wicketsValue2 === 10)) {
        buttons.style.display = 'none'
        h3.textContent = `${tossWon === team1 ? team1:team2} won the match.`;
        announcement.removeChild(h2);
        announcement.appendChild(h3);
        hideScore.style.display = 'none';
        return; 
    }else if ((scoreValue2 === scoreValue && oversValue2 === totalOvers) || (scoreValue2 === scoreValue && wicketsValue2 === 10)) {
        buttons.style.display = 'none'
        h3.textContent = 'Match Draw';
        announcement.removeChild(h2);
        announcement.appendChild(h3);
        hideScore.style.display = 'none';
        return;
    }else if (scoreValue2 > scoreValue) {
        buttons.style.display = 'none'
        h3.textContent = `${tossWon === team1 ? team2:team1} won the match`;
        announcement.removeChild(h2);
        announcement.appendChild(h3);
        hideScore.style.display = 'none';
        return;
    }
}

function updateScoreBoard(update) {
    if (flag === true) {
        firstInnings(update, h2);
    }else{
        secondInnings(update, h2);
    }
}
function scoreBoard(){
    document.getElementById('dot').addEventListener('click', () => {
        updateScoreBoard(0);
    });
    document.getElementById('one').addEventListener('click', () => {
        updateScoreBoard(1);
    });
    document.getElementById('two').addEventListener('click', () => {
        updateScoreBoard(2);
    });
    document.getElementById('three').addEventListener('click', () => {
        updateScoreBoard(3);
    });
    document.getElementById('four').addEventListener('click', () => {
        updateScoreBoard(4);
    });
    document.getElementById('six').addEventListener('click', () => {
        updateScoreBoard(6);
    });
    document.getElementById('wide').addEventListener('click', () => {
        updateScoreBoard('wide');
    });
    document.getElementById('out').addEventListener('click', () => {
        updateScoreBoard('out');
    });
    document.getElementById('noBall').addEventListener('click', () => {
        updateScoreBoard('noBall');
    });
}

function start(){
    const status = validateInputs();
    if(status !== false){
        scoreBoard();
    }
};

toss.addEventListener('click', start);
playAgain.addEventListener('click', () => {
    location.reload();
});
