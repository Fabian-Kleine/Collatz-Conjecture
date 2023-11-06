//If you are a developer you see this!
console.log('If you are a developer you see this!');

const calcButton = document.getElementById('calc');
const numberInput = document.getElementById('number');

calcButton.addEventListener('click',function(){
    collatzConjecture(numberInput.value)
});

function collatzConjecture(x){
    showError("")
    if(x<0){
        showError("x can only be a natural number")
    }else if(x == ""){
        showError("x is not defined")
    }else{
        var nums = [x];
        while(x != 1 || x != 0){
            if(x == 1 || x == 0){
                break
            }
            if(checkIfOdd(x) == 1){
                x = 3*x+1
            }else if(checkIfOdd(x) == 0){
                x = x/2
            }else{
                showError('failed testing if odd or even');
            }
            nums.push(x)
        }
        console.log(nums);
        addToTable(nums);
    }
}

function checkIfOdd(num){
    return num % 2;
}

const tableInputNumber = document.getElementById('table_input-number'); 
const tableHeighestNumber = document.getElementById('table_heighest-number'); 
const tableSteps = document.getElementById('table_steps'); 
const tbody = document.getElementById('tbody_table2');

function addToTable(nums){
    tableInputNumber.innerText = nums[0];
    tableHeighestNumber.innerText = Math.max(...nums);
    tableSteps.innerText = nums.length;
    tbody.innerHTML = "";
    nums.forEach((element,i) => {
        var formula = "3*x+1";
        if(checkIfOdd(element) == 0){
            formula = "x/2"
        }
        tbody.innerHTML += `
        <tr>
        <th scope="row">${i+1}</th>
        <th scope="row">${element}</th>
        <th scope="row">${formula}</th>
        </tr>
        `
    });
}

const randomNumButton = document.getElementById('random_num');

randomNumButton.addEventListener('click',function(){
    useRandomNumber()
})

function useRandomNumber(){
    var random = randomIntFromInterval(5,999);
    numberInput.value = random;
    collatzConjecture(random);
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const errorMsg = document.getElementById('errorMsg');

function showError(err){
    console.warn(err);
    errorMsg.innerText = err;
}

collatzConjecture(12);