var click=0; //счётчик кликов
var boostValue = 0; // значения буста
var isBoosted = false; //буля для запуска таймера

function boostObj (name,value,price,priceMultiplier) {
    this.name = name;
    this.value = value;
    this.price = price;
    this.priceMultiplier = priceMultiplier;
}

//создаю обьекты бустов
var cursor = new boostObj("Курсор", 0.1, 10, 1.1);
var grandma = new boostObj("Бабуля", 1, 15, 2);
var nikita = new boostObj("Никита", 5, 20, 1.1);

//отрисовка блока с кнопками
var block = document.getElementById("buttonBlock");
block.innerHTML=" <button id='cursorBoost'>Cursor (+0.1)</button> <button id='grandmaBoost'>Grandma(+1)</button><button id='nikitaBoost'>Nikita(+10)</button>";

//вытаскиваем кнопки из файла
var cursorButton = document.getElementById("cursorBoost");
var grandmaButton = document.getElementById("grandmaBoost");
var nikitaButton = document.getElementById("nikitaBoost");

//отрисовываем холст
var canvasClick = document.getElementById("Canvas");
canvasClick.addEventListener('click', increment);
var ctx = canvasClick.getContext("2d");

//функция увеличения буста
function addBoost(value,price,priceMultiplier){
    if(click>=price){
        if(!isBoosted){
            var timerId = setInterval(function() {
                click+= boostValue;
            }, 1000);
        isBoosted = true;     
        }

        boostValue += value;
        click-=price;
        price*=priceMultiplier;
        
        
    }
    return price;
}

//вызываем добавление буста по кнопке
cursorButton.onclick = function (){
   cursor.price = addBoost(cursor.value, cursor.price, cursor.priceMultiplier);
}
grandmaButton.onclick = function (){
    grandma.price = addBoost(grandma.value, grandma.price, grandma.priceMultiplier);
}
nikitaButton.onclick = function (){
    nikita.price =addBoost(nikita.value, nikita.price, nikita.priceMultiplier);
}

//Увеличение значения клика и отрисовка
function increment(canvasClick) {  
    var x = canvasClick.clientX - 240;
    var y = canvasClick.clientY - 160;
    var dist= Math.sqrt(y*y + x*x);
    if (dist<50){
       click++;
       redraw();
    }
    
}

function redraw() {
    ctx.clearRect(0,0, canvasClick.width, canvasClick.height);
    ctx.fillStyle="black";
    ctx.font="20px Verdana";
    ctx.fillText("Клики: " + click.toFixed(1), 190,20);
    ctx.fillText("Кликов/сек:  " + boostValue.toFixed(1), 20,250);
    ctx.fillText("Цена курсоров:" + cursor.price.toFixed(1) + " Цена бабуль:  " + grandma.price.toFixed(1), 20,280);
     ctx.fillText("Цена Никиты: бесценно (" + nikita.price.toFixed(1)+")", 20,300)
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(canvasClick.width /2, canvasClick.height /2, 50,0,2*3.14);
    
    ctx.fill();
    
    increment(canvasClick);
    
}

function redrawTiming (){
    var timerId = setInterval(function() {
    redraw();
    }, 10);
}

redrawTiming();



