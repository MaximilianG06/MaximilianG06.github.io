


let healthOne;
let damageOne;

let healthTwo;
let damageTwo;

let valuePlayerOne;
let valuePlayerTwo;

function chooseLow() {
    healthOne = 15;
    damageOne = 1;
    valuePlayerOne = 1;

    document.getElementById('PlayerOne').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerOne" src="./img/Player_One.png"><p>ÖÖ</p><img id="small" src="./img/Luigi_weak.png" class="hoverText"></div>'
    document.getElementById('sizeBigBox').style.display = 'none';
    document.getElementById('sizeBigBox2').style.display = 'flex';
    document.getElementById('PlayerTwo').style.display = 'block';

}
function chooseBalanced() {
    healthOne = 10;
    damageOne = 2;
    valuePlayerOne = 2;

    document.getElementById('PlayerOne').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerOne" src="./img/Player_One.png"><p>ÖÖ</p><img id="small" src="./img/Mario_balanced.png"" class="hoverText"></div>'
    document.getElementById('sizeBigBox').style.display = 'none';
    document.getElementById('sizeBigBox2').style.display = 'flex';
    document.getElementById('PlayerTwo').style.display = 'block';
}
function chooseHigh() {
    healthOne = 5;
    damageOne = 3;
    valuePlayerOne = 3;

    document.getElementById('PlayerOne').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerOne" src="./img/Player_One.png"><p>ÖÖ</p><img id="small" src="./img/yoschi_Strong.png" class="hoverText"></div>'
    document.getElementById('sizeBigBox').style.display = 'none';
    document.getElementById('sizeBigBox2').style.display = 'flex';
    document.getElementById('PlayerTwo').style.display = 'block';

}

function chooseLow2() {
    healthTwo = 15;
    damageTwo = 1;
    valuePlayerTwo = 1;

    document.getElementById('PlayerTwo').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerTwo" src="./img/Player_Two.png"><p>ÖÖ</p><img id="small" src="./img/Luigi_weak.png" class="hoverText"></div>'
    setTimeout(function () {
        document.getElementById('charakterDiv').style.display = 'none';
        document.getElementById('BodyFight').style.display = 'flex';
        healthOneHeart();
        healthTwoHeart();

    }, 1000);


}
function chooseBalanced2() {
    healthTwo = 10;
    damageTwo = 2;
    valuePlayerTwo = 2;

    document.getElementById('PlayerTwo').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerTwo" src="./img/Player_Two.png"><p>ÖÖ</p><img id="small" src="./img/Mario_balanced.png"" class="hoverText"></div>'
    setTimeout(function () {
        document.getElementById('charakterDiv').style.display = 'none';
        document.getElementById('BodyFight').style.display = 'flex';
        healthOneHeart();
        healthTwoHeart();

    }, 1000);

}
function chooseHigh2() {
    healthTwo = 5;
    damageTwo = 3;
    valuePlayerTwo = 3;

    document.getElementById('PlayerTwo').innerHTML = '<div class="ChosenCharacterImg"><img class="PlayerTwo" src="./img/Player_Two.png"><p>ÖÖ</p><img id="small" src="./img/yoschi_Strong.png" class="hoverText"></div>'
    setTimeout(function () {
        document.getElementById('charakterDiv').style.display = 'none';
        document.getElementById('BodyFight').style.display = 'flex';
        healthOneHeart();
        healthTwoHeart();

    }, 1000);

}

function healthOneHeart() {
    for (let i = 0; i < healthOne; i++) {
        document.getElementById('heartOne').innerHTML += '<img class="healthImg" src="img/Herz.png"> <br>';
    }
}
function healthTwoHeart() {
    for (let i = 0; i < healthTwo; i++) {
        document.getElementById('heartTwo').innerHTML += '<img class="healthImg2" src="img/Herz.png"> <br>';
    }
}
//Würfelcode//
function newDice() {
    return Math.floor(Math.random() * 6) + 1;
}


function Roll() {
    document.getElementById('output').innerHTML = '<p></p>'


    num = newDice();
    num2 = newDice();
    if (healthOne <= 0 || healthTwo <= 0) {
        document.getElementById('BodyFight').style.display = 'none';
        document.getElementById('winner').style.display = 'flex';
    }


    else if (healthOne > 0 && healthTwo > 0) {

        if (num > num2) {
            document.getElementById('output').innerHTML += '<img class="printCharakters" src="img/Player_' + valuePlayerOne + '.png"><img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_cube_' + num + '.png">';
            document.getElementById('output').innerHTML += '<img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_Cube_' + num2 + '.png"><img id="playerTwoCharakter" class="printCharakters" src="img/Player_' + valuePlayerTwo + '.png">';

            heartTwo.innerHTML = '';
            healthTwo -= damageOne;
            healthTwoHeart();
        } else if (num < num2) {
            document.getElementById('output').innerHTML += '<img class="printCharakters" src="img/Player_' + valuePlayerOne + '.png"><img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_cube_' + num + '.png">';
            document.getElementById('output').innerHTML += '<img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_Cube_' + num2 + '.png"><img id="playerTwoCharakter" class="printCharakters" src="img/Player_' + valuePlayerTwo + '.png">';
            heartOne.innerHTML = '';
            healthOne -= damageTwo;
            healthOneHeart();
        } else if (num == num2) {
            document.getElementById('output').innerHTML += '<img class="printCharakters" src="img/Player_' + valuePlayerOne + '.png"><img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_cube_' + num + '.png">';
            document.getElementById('output').innerHTML += '<img width="50vh" class="rainbow-box" id="dices" src="img/PinClipart_Cube_' + num2 + '.png"><img id="playerTwoCharakter" class="printCharakters" src="img/Player_' + valuePlayerTwo + '.png">';
        }
    }
    if (healthTwo <= 0) {
        document.getElementById('winnerOutput').innerHTML = '<img class="winnerText" width="50vh" src="img/1_has_won.png">';
        document.getElementById('placeCharakter').innerHTML = '<img class="printCharakters" src="img/Player_' + valuePlayerOne + '.png">'
    } if (healthOne <= 0) {
        document.getElementById('winnerOutput').innerHTML = '<img class="winnerText" width="50vh" src="img/2_has_won.png">';
        document.getElementById('placeCharakter').innerHTML = '<img class="printCharakters" id="playerTwoCharakter" src="img/Player_' + valuePlayerTwo + '.png">'
    }
}

//winner//




