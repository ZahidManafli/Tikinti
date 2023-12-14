//Code for to get data from json:
let data_from_dom = Array.from(document.querySelectorAll(".image_and_razmer"))
let pricesData_from_dom = Array.from(document.querySelectorAll(".prices"))
console.log(pricesData_from_dom)
let i = 0;
let k=0;
fetch('https://db-tikinti.vercel.app/data').then((res) => res.json()).then((data) => {
    data_from_dom.forEach(function(element_from_dom){
        element_from_dom.innerHTML = `
        <img src="${data[i].image}" alt="">
        <h3>${data[i].name} ${data[i].size}</h3>
        <div class="info_colors">
            <p>Size: ${data[i].size}mm</p>
            <p>Quantity: ${data[i].quantity}</p>
            <p>Available colors: ${data[i].number_of_color}</p>
            <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
            </div>
        </div>
        `
        i++;
    })
}).catch((err) => {
    console.error(err);
})
fetch(`https://db-tikinti.vercel.app/prices`).then((res)=>res.json()).then((prices)=>{
    console.log(prices)
    pricesData_from_dom.forEach(function(price_from_dom){
        price_from_dom.innerHTML = `
        <div class="price">
            <h3>${prices[k].data_for_prices[0].color}</h3>
            <p>${prices[k].data_for_prices[0].price}</p>
        </div>
        <div class="price">
            <h3>${prices[k].data_for_prices[1].color}</h3>
            <p>${prices[k].data_for_prices[1].price}</p>
        </div>
        <div class="price">
            <h3>${prices[k].data_for_prices[2].color}</h3>
            <p>${prices[k].data_for_prices[2].price}</p>
        </div>
        <div class="price">
            <h3>${prices[k].data_for_prices[3].color}</h3>
            <p>${prices[k].data_for_prices[3].price}</p>
        </div>
        <div class="price">
            <h3>${prices[k].data_for_prices[4].color}</h3>
            <p>${prices[k].data_for_prices[4].price}</p>
        </div>                                
        `
        k++;
    })
}).catch((err) => {
    console.error(err);
})
//End code that gets data from json

//Code for ganburger menu:
let hanburgerMenu_icon = document.getElementById("hanburger_icon")
let close_icon = document.getElementById("close_icon")
let hanburger_menu = document.querySelector(".hanburger_menu")

hanburgerMenu_icon.addEventListener("click",function(){
    document.body.style.overflow = "hidden";
    hanburgerMenu_icon.style.display = "none";
    close_icon.setAttribute("style","display:block; position:absolute; z-index:4; color:#fff; top:2vw; right:45vw;");
    hanburger_menu.style.display = "flex";
})

close_icon.addEventListener("click",function(){
    document.body.style.overflow = "visible";
    close_icon.style.display = "none";
    hanburgerMenu_icon.style.display = "block";
    hanburger_menu.style.display = "none";
})