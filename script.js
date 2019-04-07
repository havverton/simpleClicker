var click=0; //счётчик кликов
var boostValue = 0; // значения буста
var isBoosted = false; //буля для запуска таймера

//Создаем конкструктор буста
function boostObj (name,value,price,priceMultiplier) {
    this.name = name;
    this.value = value;
    this.price = price;
    this.priceMultiplier = priceMultiplier;
    this.addBoost = function () {  //метод для изменения цены и добавления буста
        this.price = addBoost(this.value, this.price, this.priceMultiplier);
    }
    
}

//создаю обьекты бустов
var cursor = new boostObj("PizzaBoy", 0.1, 10, 1.2);
var grandma = new boostObj("Grandma", 1, 15, 1.2);
var chef = new boostObj("Chef", 5, 20, 1.2);
var grandChef = new boostObj("Grand Chef", 10, 40, 1.2);


//вытаскиваем кнопки из файла
var clickerButton = document.getElementById("clickerButton");
//вытаскиваем элемент вывода кликов
var clickerValue = document.getElementById("clicks");
//вытаскиваем элемент вывода буста
var bonusValue = document.getElementById("clickBoost");
//функция кликера
clickerButton.onclick = function(){
    click++;
    clickerValue.innerHTML = "Clicks: " + click.toFixed(1);
}

//вытаскиваем блоки из шопа
var cursorButton = document.getElementById("cursorBoostBlock");
var grandmaButton = document.getElementById("grandmaBoostBlock");
var chefButton = document.getElementById("chefBoostBlock");
var grandChefButton = document.getElementById("grandChefBoostBlock");




//Первичная отрисовка
var cursorTitle = document.getElementById("cursorTitle");
var cursorInfo = document.getElementById("cursorInfo");

cursorTitle.innerHTML = cursor.name;
cursorInfo.innerHTML = "Price: " + cursor.price.toFixed(1) + " Boost: " + cursor.value;

var grandmaTitle = document.getElementById("grandmaTitle");
var grandmaInfo = document.getElementById("grandmaInfo");

grandmaTitle.innerHTML = grandma.name;
grandmaInfo.innerHTML = "Price: " + grandma.price.toFixed(1) + " Boost: " + grandma.value;

var chefTitle = document.getElementById("chefTitle");
var chefInfo = document.getElementById("chefInfo");

chefTitle.innerHTML = chef.name;
chefInfo.innerHTML = "Price: " + chef.price.toFixed(1) + " Boost: " + chef.value;

var grandChefTitle = document.getElementById("grandChefTitle");
var grandChefInfo = document.getElementById("grandChefInfo");

grandChefTitle.innerHTML = grandChef.name;
grandChefInfo.innerHTML = "Price: " + grandChef.price.toFixed(1) + " Boost: " + grandChef.value;






//функция увеличения буста
function addBoost(value,price,priceMultiplier){
    if(click>=price){
        if(!isBoosted){
            var timerId = setInterval(function() {
                click+= boostValue;
                clickerValue.innerHTML="Clicks: " + click.toFixed(1);
                bonusValue.innerHTML="Boost: " + boostValue.toFixed(1);
            }, 1000);
        isBoosted = true;  
        }

        boostValue += value;
        click-=price;
        clickerValue.innerHTML="Clicks: " + click.toFixed(1);
        bonusValue.innerHTML="Boost: " + boostValue.toFixed(1);
        price*=priceMultiplier;
        
        
    }
    
    return price;
}

//вызываем добавление буста по кнопке
cursorButton.onclick = function (){
   cursor.addBoost();
    cursorInfo.innerHTML="Price: " + cursor.price.toFixed(1) + " Boost: " + cursor.value;

}
grandmaButton.onclick = function (){
    grandma.addBoost();
    grandmaInfo.innerHTML="Price: " + grandma.price.toFixed(1) + " Boost: " + grandma.value;
}

chefButton.onclick = function (){
    chef.addBoost();
    chefInfo.innerHTML="Price: " + chef.price.toFixed(1) + " Boost: " + chef.value;
}

grandChefButton.onclick = function (){
    grandChef.addBoost();
    grandChefInfo.innerHTML="Price: " + grandChef.price.toFixed(1) + " Boost: " + grandChef.value;
}



/*function redraw() {
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


*/
