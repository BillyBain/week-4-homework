const start = document.getElementById("start");
let scores = document.getElementById("scores");
let time;
let highScores = [];
let timeEl = document.getElementById("time");
let message = document.getElementById("message")
let quizTime = "";
let score;



const displayScore = document.getElementById("highscore");
const quixBox = document.getElementById("quixBox");

displayScore.addEventListener("click", function(event) {
    event.preventDefault();
    let storedScores = localStorage.getItem("Highscore")
    if (storedScores === null) {
        scores.textContent = "No scores recorded.";
    }   else {
            scores.textContent = storedScores;
            showScore = JSON.parse(storedScores);
            scores.innerHTML = ("Name:" + showScore.name + " Score:" + showScore.score);
            }
    }
);

const lose = function(){
    timeEl.textContent = "";
    let score = 0;
    quizTime = ""
    let name = window.prompt("Enter your name: " ,)
    let fScore = {
        name: name,
        score: score
    };
    let highScores = JSON.stringify(fScore);
    start.hidden = false;
    localStorage.setItem("Highscore", highScores);
    quixBox.children[1].innerHTML= '';
};

start.addEventListener("click", function(event){
    event.preventDefault();
    start.hidden = true;
    question1();
    
    function question1() {
        let quizTime = 60;

        let time = setInterval(function() {


            if (quizTime > 1) {
                timeEl.textContent = quizTime + ' seconds remaining';
                quizTime--;
              } else if (quizTime === 1) {
                timeEl.textContent = quizTime + ' second remaining';
                quizTime--;
              } else {
                    clearInterval(time);
                    lose();
                    return;                  
                }
            }, 1000);
            
        const answers =["Markup", "Styling", "Scripting", "Foodie"];
        let question = document.createElement("h2");
        let a = document.createElement("button");
        let b = document.createElement("button");
        let c = document.createElement("button");
        let d = document.createElement("button");

        question.innerHTML = "<h2>What type of coding language is Javascript?</h2>";
        quixBox.children[1].appendChild(question);
        a.textContent = answers[0];
        b.textContent = answers[1];
        c.textContent = answers[2];
        d.textContent = answers[3];
        quixBox.children[1].appendChild(a);
        quixBox.children[1].appendChild(b);
        quixBox.children[1].appendChild(c);
        quixBox.children[1].appendChild(d);

        a.addEventListener("click", function(chooseA){
            quizTime--;
        });
        b.addEventListener("click", function(chooseB){
            quizTime--;
        });
        c.addEventListener("click", function(chooseC){
            quixBox.children[1].innerHTML= '';
            question2();
        });
        d.addEventListener("click", function(chooseD){
            quizTime--;
        });
        
        function question2() {
            const answers =["Over 90%", "Approximately 80%", "Approximately 60%", "Under 40%"];
            let question = document.createElement("h2");
            let a = document.createElement("button");
            let b = document.createElement("button");
            let c = document.createElement("button");
            let d = document.createElement("button");
    
            question.innerHTML = "<h2>Which one of these best describes how many websites use JavaScript?</h2>";
            quixBox.children[1].appendChild(question);
            a.textContent = answers[0];
            b.textContent = answers[1];
            c.textContent = answers[2];
            d.textContent = answers[3];
            quixBox.children[1].appendChild(a);
            quixBox.children[1].appendChild(b);
            quixBox.children[1].appendChild(c);
            quixBox.children[1].appendChild(d);

            a.addEventListener("click", function(chooseA){
                quixBox.children[1].innerHTML= '';
                question3();
            });
            b.addEventListener("click", function(chooseB){
                quizTime--;
            });
            c.addEventListener("click", function(chooseC){
                quizTime--;
            });
            d.addEventListener("click", function(chooseD){
                quizTime--;
            });
        }
        function question3() {
            const answers =["HTML", "Javascript", "CSS", "All of the Above"];
            let question = document.createElement("h2");
            let a = document.createElement("button");
            let b = document.createElement("button");
            let c = document.createElement("button");
            let d = document.createElement("button");
    
            question.innerHTML = "<h2>What languages are commonly used in making websites?</h2>";
            quixBox.children[1].appendChild(question);
            a.textContent = answers[0];
            b.textContent = answers[1];
            c.textContent = answers[2];
            d.textContent = answers[3];
            quixBox.children[1].appendChild(a);
            quixBox.children[1].appendChild(b);
            quixBox.children[1].appendChild(c);
            quixBox.children[1].appendChild(d);

            a.addEventListener("click", function(chooseA){
                quizTime--;  
            });
            b.addEventListener("click", function(chooseB){
                quizTime--;
            });
            c.addEventListener("click", function(chooseC){
                quizTime--;
            });
            d.addEventListener("click", function(chooseD){
                quixBox.children[1].innerHTML= '';
                question4();
            });
        }
        function question4() {
            const answers =["Const", "+", "Append", "innerHtml"];
            let question = document.createElement("h2");
            let a = document.createElement("button");
            let b = document.createElement("button");
            let c = document.createElement("button");
            let d = document.createElement("button");
    
            question.innerHTML = "<h2>______ is one of the useful methods used to insert required content at position end of the specific selected elements.</h2>";
            quixBox.children[1].appendChild(question);
            a.textContent = answers[0];
            b.textContent = answers[1];
            c.textContent = answers[2];
            d.textContent = answers[3];
            quixBox.children[1].appendChild(a);
            quixBox.children[1].appendChild(b);
            quixBox.children[1].appendChild(c);
            quixBox.children[1].appendChild(d);

            a.addEventListener("click", function(chooseA){
                quizTime--;
            });
            b.addEventListener("click", function(chooseB){
                quizTime--;
            });
            c.addEventListener("click", function(chooseC){
                quixBox.children[1].innerHTML= '';
                question5();
            });
            d.addEventListener("click", function(chooseD){
                quizTime--;
            });
        }
        function question5() {
            const answers =["HTML", "Styling", "Certain", "Conditional"];
            let question = document.createElement("h2");
            let a = document.createElement("button");
            let b = document.createElement("button");
            let c = document.createElement("button");
            let d = document.createElement("button");
    
            question.innerHTML = "<h2>In Javascript, if/else are what type of statements?</h2>";
            quixBox.children[1].appendChild(question);
            a.textContent = answers[0];
            b.textContent = answers[1];
            c.textContent = answers[2];
            d.textContent = answers[3];
            quixBox.children[1].appendChild(a);
            quixBox.children[1].appendChild(b);
            quixBox.children[1].appendChild(c);
            quixBox.children[1].appendChild(d);

            a.addEventListener("click", function(chooseA){
                time--;
            });
            b.addEventListener("click", function(chooseB){
                time--;
            });
            c.addEventListener("click", function(chooseC){
                time--;
            });
            d.addEventListener("click", function(chooseD){
                let score = quizTime;
                clearInterval(time);
                timeEl.textContent = "";
                quizTime = "";
                let name = window.prompt("Enter your name" ,);
                let fScore = {
                    name: name,
                    score: score
                };
                let highScores = JSON.stringify(fScore);
                quixBox.children[1].innerHTML= '';
                start.hidden = false;
                localStorage.setItem("Highscore", highScores);
                return;
            });
        }
    };
   
});


