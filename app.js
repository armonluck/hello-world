function getName (){
    let userName = prompt("What is your name?");
        document.write("Greetings, " + userName + " welcome to my page!")
        console.log('User entered: ' + userName);
}

getName();

function getAnswer (){
    let userAnswer = prompt(' Do you like to code?'); 
        if(userAnswer.toLowerCase ()== 'yes'){
        document.write(' You like to code? So do I!');
        } else if(userAnswer.toLowerCase() == 'no'){
        document.write(' Coding is not for everybody')
        } else {
            document.write(' That is not what I expected you to say...')
        }
}

function count(){
    let guess = prompt('How many letters are in HTML?');
    if (guess == '4'){
        document.write(' Great job, you can count quite well!')
    } else {
        guess = prompt('Try again...');
    }
}

count();
