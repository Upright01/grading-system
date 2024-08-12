function checkGrade(){

    var userInput = document.getElementById('Score').value;
    var music1 = new Audio ('Assests/clapping.mp3.wav')
    var music2 = new Audio('Assests/small-group-clapping.wav')
     

    if (userInput <= 0){
        document.getElementById('display').value= 'Not Valid'
        document.getElementById('display').style.backgroundColor= 'red'
    }else if (userInput=="" || userInput < 45){
        document.getElementById('display').value= 'F - Failed!'
         document.getElementById('display').style.backgroundColor= 'red'

        
    }else if(userInput >=45 &&userInput <50){
        document.getElementById('display').value= 'E - Pass!'
         document.getElementById('display').style.backgroundColor= 'blue'
         music2.play()

    }else if (userInput >= 50 && userInput < 55){
        document.getElementById('display').value= 'D - Average'
         document.getElementById('display').style.backgroundColor= 'blue'

    }else if(userInput >= 55 && userInput < 60){
        document.getElementById('display').value= 'C - Credit!'
         document.getElementById('display').style.backgroundColor= 'green'

    }else if(userInput >= 60 && userInput < 70){
        document.getElementById('display').value= 'B - Good!'
         document.getElementById('display').style.backgroundColor= 'green'

    }else if (userInput >=70 && userInput <= 100){
        document.getElementById('display').value= 'E -Excellent!'
        document.getElementById('display').style.backgroundColor= 'green'
        music1.play()

    }else {
        document.getElementById('display').value= 'No result!  Total is 100'
        document.getElementById('display').style.backgroundColor= 'red'
        document.getElementById('display').src= ('./Assests/clapping.mp3.wav')
    }
}


