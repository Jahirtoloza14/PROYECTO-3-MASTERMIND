







/* funcionamiento */
const clickButton = document.getElementById('miBoton');
const display = document.querySelector('.container');
const buttons = document.querySelector('.botones');
const coloresGuardados = JSON.parse(sessionStorage.getItem("coloresSeleccionados")) || [];



let codeLenght = 4;
let trys = 8;
let crackTry = 1;

init();

function init() {
random_code =[];
    crackTry = 1;
    display.innerHTML = '';
    buttons.innerHTML = '';

    for (let i = 1; i <= trys; i++) {
        let divTry = document.createElement('div');
        divTry.setAttribute('id', 'try-' +i);
        divTry.setAttribute('class', 'try');
        let tryLeft = document.createElement('div');
        tryLeft.setAttribute('class', 'left');
        let tryRight = document.createElement('div');
        tryRight.setAttribute('class', 'right');

        for (let i = 1; i <= codeLenght; i++) {
            let divL = document.createElement('div');
            let divR = document.createElement('div');

            tryLeft.append(divL);
            tryRight.append(divR);
        }

        divTry.append(tryLeft);
        divTry.append(tryRight);
        display.prepend(divTry);
        console.log(tryLeft, tryRight, divTry);
    }

    for (let i = 1; i <= codeLenght; i++) {
        let div_select_wrapper = document.createElement('div');
        div_select_wrapper.setAttribute('class', 'fondo');
        let select = document.createElement('select');

        //Farben 
        for (let color of coloresGuardados) {
            let option = document.createElement('option');
            option.setAttribute('style', 'background-color:' + color);
            option.setAttribute('value', color);
            select.append(option);
        }
        select.setAttribute('style', 'background-color:' + coloresGuardados[0]);

        select.addEventListener('change', (e) => {
            e.target.setAttribute('style', 'background-color:' + e.target.value);
        });

        div_select_wrapper.append(select);
        buttons.append(div_select_wrapper);
    }
createRandomCode();
}





function createRandomCode() {
    for (let i = 1; i <= codeLenght; i++) {
        let random_color = coloresGuardados[Math.floor(Math.random() * coloresGuardados.length)]
        random_code.push(random_color);
    }
    console.log(random_code);
}

clickButton.addEventListener('click', (e) => {
    
    let input_colors = document.querySelectorAll('.fondo>select');
    let input_colors_arr = [];
    for (let v of input_colors) {
        input_colors_arr.push(v.value);
    } console.log(input_colors);
    show('left', input_colors_arr);
    correction_Array = createCorrectionArray(input_colors_arr);
    show('right', correction_Array);
    crackTry++;
    checkWin(correction_Array);

});


function show(type, coloresGuardados) {
    let tryView = document.querySelectorAll('#try-'+crackTry+'>.'+type+'>div');
    tryView.forEach((v, i) => {
        v.setAttribute('style', 'background-color:'+coloresGuardados[i]);
    });console.log(tryView);
} 

function createCorrectionArray(input_colors_arr) {
    let random_code_copy = [...random_code];
    let correction_Array = [];
    
    //Richtige Position
    for (let i in random_code_copy) {
        if (random_code_copy[i] == input_colors_arr[i])  {
            random_code_copy[i] = null;
            input_colors_arr[i] = null;
            correction_Array.push('red');
        }
    }
    //Falsch Position
    for (let i in random_code_copy) {
        for (j in input_colors_arr) {
            if (random_code_copy[i] != null && random_code_copy[i] == input_colors_arr[j]) {
                random_code_copy[i] = null;
                input_colors_arr[j] = null;
                correction_Array.push('white');
            }
        }
    }
    return correction_Array;
}

function checkWin(correction_Array) {
    let countCorrect = 0;
    for (let v of correction_Array) {
        if (v == 'red') {
            countCorrect++;
        }
    }
    if (countCorrect == codeLenght) {
        
        init();
    } else if(crackTry > trys) {
     
        init();
    }
}