let readlinesync = require("prompt-sync");
let prompt = readlinesync();
let score = 0;
let totalQuestion = 0;
let userName = prompt("What is your name? ");
const leaderBoard = {
    data: [
        {
            name: "Ashish",
            score: 1
        },
        {
            name: "Riya",
            score: 2
        },
        {
            name: "Jay",
            score: 3
        }

    ]
}
/* Creating data set*/
const database = {
    data : [
        {
            question: `let a = {}, b = {}
console.log(a==b)
console.log(a===b)`,
            options: {
                a: "false, false",
                b: "false, true",
                c: "true, false",
                d: "true, true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(target, sourse) creates which type of copy?",
            options: {
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining can be possible with forEach?",
            options: {
                a: "Yes",
                b: "No"
            },
            correctAnswer: "b"
        }
    ]
}
function playGame(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        console.log("correct Answer")
        score++;
    } else{
        console.log("Incorrect Answer")
        console.log(`Correct Answer is ${correctAnswer}`);
    }
    totalQuestion++;
    
}
function showQuestionAndOptions(database){
    for(let i=0; i<database.data.length; i++){
        console.log(`\n${i+1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = prompt("Enter your answer :- ");
        userAnswer.toLowerCase(); 
        playGame(userAnswer, database.data[i].correctAnswer);
    }
}
function highScorer(leaderBoard){
    leaderBoard.data.push({name: userName, score: score})
    let sortedScoreList = leaderBoard.data.sort((a, b)=> b.score - a.score)
    console.log("\nCheck your position in leaderboard")
    for(let leader of sortedScoreList){
        console.log(`${leader.name} - score: ${leader.score}`)
    }
}
showQuestionAndOptions(database);
console.log(`your score is ${score} out of ${totalQuestion}`);
highScorer(leaderBoard)


