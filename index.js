//Syntaxtic sugar with a console data running

console.log("Data roaming"); // backend json 

const alert = "Welcome to new Website"; //alert message 

// Example: Assigning numbers to an element's innerHTML
document.getElementById('myelementId').innerHTML = [0,1,2,3,4,5,6,7,8,9,10].join(','); // temporary go back when doc needs data

document.getElementById('calcEquals').addEventListener('click', () => {
    try {
        const result = eval(calcInput);
        display.value = result;
        calcInput = display.value;
        console.log("Answer:", result);
        window.alert("Answer: " + result);
    } catch (e) {
        display.value = 'Error';
        calcInput = '';
        console.log("Error");
        window.alert("Error");
    }
});

const style = document.createElement('style');
style.textContent = `
    #myelementId {
        color: blue;
        font-weight: bold;
        background: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
    }
`;
document.head.appendChild(style);

const calculatorContainer = document.createElement('div');
calculatorContainer.innerHTML = `
    <input type="text" id="calcDisplay" readonly style="width: 160px; margin-bottom: 10px; font-size: 18px; text-align: right;" />
    <div>
        <button class="calc-btn">7</button>
        <button class="calc-btn">8</button>
        <button class="calc-btn">9</button>
        <button class="calc-btn">/</button>
    </div>
    <div>
        <button class="calc-btn">4</button>
        <button class="calc-btn">5</button>
        <button class="calc-btn">6</button>
        <button class="calc-btn">*</button>
    </div>
    <div>
        <button class="calc-btn">1</button>
        <button class="calc-btn">2</button>
        <button class="calc-btn">3</button>
        <button class="calc-btn">-</button>
    </div>
    <div>
        <button class="calc-btn">0</button>
        <button class="calc-btn">.</button>
        <button id="calcClear">C</button>
        <button class="calc-btn">+</button>
    </div>
    <div>
        <button id="calcEquals" style="width: 100%">=</button>
    </div>
`;
document.body.appendChild(calculatorContainer);

let calcInput = '';
const display = document.getElementById('calcDisplay');

document.querySelectorAll('.calc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        calcInput += btn.textContent;
        display.value = calcInput;
    });
});

document.getElementById('calcClear').addEventListener('click', () => {
    calcInput = '';
    display.value = '';
});

document.getElementById('calcEquals').addEventListener('click', () => {
    try {
        display.value = eval(calcInput);
        calcInput = display.value;
    } catch (e) {
        display.value = 'Error';
        calcInput = '';
    }
});
 


