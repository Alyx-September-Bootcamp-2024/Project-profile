const checkAnswer = (answer) => {
    if (answer == "Correct") {
      document.getElementById("result").innerHTML =
        "Congratulations, she didn't fool you there!";
    } else {
      document.getElementById("result").innerHTML = "These are not lies!";
    }
  
    console.log("hello");
  };
  
  console.log("it loads");
  
 window.checkAnswer = checkAnswer;