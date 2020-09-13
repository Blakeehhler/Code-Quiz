$(document).ready(function () {
    const questions = [{
            title: "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
            choices: ["Number", "Count", "Solve", "Math"],
            answer: "Math"
        },
        {
            title: "What is a JavaScript element that represents either TRUE or FALSE values?",
            choices: ["Condition", "Event", "Boolean", " RegExp"],
            answer: "Boolean"
        },
        {
            title: "In JavaScript, what is a block of code called that is used to perform a specific task?",
            choices: ["Function", "Variable", "String", "Declaration"],
            answer: "Function"
        },
        {
            title: "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
            choices: ["Scope", "Range", "Restriction", "Output Level"],
            answer: "Scope"
        },
        {
            title: "What is the default behavior called that is used to move declarations to the top of the current scope?",
            choices: ["Jumping", "Arranging", "Sorting", "Hoisting"],
            answer: "Hoisting"
        }
    ]
    $("#btnSubmit").on("click", (function () {
        $("#questions").show();
        $("#clock").show();
        $(".hideOnStart").hide()
        nextQuestion()
        timerInterval  = setInterval(clock, 1000);
    }));

    let timer = 30
    let currentQuestionIndex = 0
    let score = 0
    let timerInterval 
    
    function clock(){
        timer--
        document.getElementById("clock").textContent = timer
        if (timer <= 0){
            endQuiz()
        }
    }
    
    function nextQuestion() {
        
        let currentQuestion = questions[currentQuestionIndex]
        document.getElementById("question").textContent = currentQuestion.title
        
        let answerElement = document.getElementById("anwsers")
        answerElement.innerHTML = ""
        currentQuestion.choices.forEach(function (choice) {
            let btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-primary btn-lg shadow-sm mx-1");
            btn.setAttribute("value", choice);
            btn.textContent = choice
            btn.onclick = checkAnwser
            answerElement.append(btn)
        })
    }
    
    function checkAnwser() {
        if (this.value !== questions[currentQuestionIndex].answer) {
            timer = timer - 5
            document.getElementById("feedback").textContent = "Wrong Anwser!!!"
        } else {
            document.getElementById("feedback").textContent = "Correct Anwser!!!"
            score++
        }
        currentQuestionIndex++
        if (currentQuestionIndex === questions.length){
            endQuiz()
        }
        else {
            nextQuestion()
        }
    }
    function endQuiz(){
        clearInterval(timerInterval);
        $("#scoreCard").show()
        $("#questions").hide();
        document.getElementById("score").textContent = "Correct Answers: " + score
        document.getElementById("score").style.cssText = "font-size: 24px";
    }
    // THEN I can save my initials and score
});