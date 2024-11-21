const currentDate = new Date();
console.log(currentDate);
const day = currentDate.getDay(); /*js counts days 0-6 0=sunday 6=saturday*/
console.log(day);

if(day==0){
    document.getElementById("price").innerHTML = '$9 Deluxe Burger & Fries';
    document.getElementById("picture").src = "images/sunday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum burger mmmm yummy it so good I love burger yum delicious yummy yum yummmm';
}
if(day==1){
    document.getElementById("price").innerHTML = '$12 Chicken Penne Alfredo';
    document.getElementById("picture").src = "images/monday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum pasta mmmm yummy it so good I love pasta yum delicious yummy yum yummmm';
}
if(day==2){
    document.getElementById("price").innerHTML = '$10 Six Inch Breakfast Pizza';
    document.getElementById("picture").src = "images/tuesday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum pizza mmmm yummy it so good I love pizza yum delicious yummy yum yummmm';
}
if(day==3){
    document.getElementById("price").innerHTML = '$12 Hot Wings';
    document.getElementById("picture").src = "images/wednesday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum chicken mmmm yummy it so good I love chicken yum delicious yummy yum yummmm';
}
if(day==4){
    document.getElementById("price").innerHTML = '$12 Fish and Chips';
    document.getElementById("picture").src = "images/thursday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum fish mmmm yummy it so good I love fish yum delicious yummy yum yummmm';
}
if(day==5){
    document.getElementById("price").innerHTML = '$6 All Drinks';
    document.getElementById("picture").src = "images/friday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum drinky mmmm yummy it so good I love drink yum delicious yummy yum yummmm';
}
if(day==6){
    document.getElementById("price").innerHTML = '$8 Greek Salad';
    document.getElementById("picture").src = "images/friday.jpg";
    document.getElementById("meal_description").innerHTML = 'yum yummy yum salad mmmm yummy it so good I love salad yum delicious yummy yum yummmm';
}