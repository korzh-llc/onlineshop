const images = document.querySelectorAll('.slider__img')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0

function show(index){
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index
}

controlls.forEach((e) =>{
    e.addEventListener('click' , () => {
    if(event.target.classList.contains('prev')) {
        let index = imageIndex - 1

        if(index < 0){
            index = images.length - 1
        }
        show(index)
    } else if (event.target.classList.contains('next'))
    {
        let index = imageIndex + 1
        if (index >= images.length){
            index = 0
        }
        show(index)
    }
})
})

setInterval(() => {
  let index = imageIndex + 1;
  if (index >= images.length) index = 0;
  show(index);
}, 2000);

show(imageIndex)






let sbjeans = document.querySelector('.sbjeans')

let sbjArr = []

class Sbj{
    constructor(image , cost){
        this.image = image
        this.cost = cost
    }
    tohtml(){
        return `<div class="sb__one__jeans">
                        <img src="${this.image}" class="product__img">
                        <h3 class="cost">${this.cost}</h3>
                        <button class ='character__select' onclick='charSelect("${this.image}")'>TO THE BASKET</button> 
                    </div>`
    }
}

sbjArr.push(new Sbj('/images/sbj1.png' , "50$"))
sbjArr.push(new Sbj("/images/sbj2.png" , "55$"))
sbjArr.push(new Sbj("/images/sbj3.png" , "60$"))

for( i = 0 ; i < sbjArr.length ; i++){
    sbjeans.innerHTML += sbjArr[i].tohtml()
}


function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}


let Bjeans = document.querySelector('.bjeans')

let bjArr = []

class Bj{
    constructor(image , cost){
        this.image = image
        this.cost = cost
    }
    tohtml(){
        return `<div class="b__one__jeans">
                    <img src="${this.image}" class="product__img">
                    <h3 class="cost">${this.cost}</h3>
                    <button class ='character__select' onclick='charSelect("${this.image}")'>TO THE BASKET</button> 
                </div>`
    }
}

bjArr.push(new Bj("/images/bj1.png" , "50$"))
bjArr.push(new Bj("/images/bj2.png" , "55$"))
bjArr.push(new Bj("/images/bj3.png" , "60$"))

for( i = 0 ; i < bjArr.length ; i++){
    Bjeans.innerHTML += bjArr[i].tohtml()
}


function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}


let Fjeans = document.querySelector('.fjeans')

let fjArr = []

class Fj{
    constructor(image , cost){
        this.image = image
        this.cost = cost
    }
    tohtml(){
        return `<div class="f__one__jeans">
                        <img src="${this.image}" class="product__img">
                        <h3 class="cost">${this.cost}</h3>
                        <button class ='character__select' onclick='charSelect("${this.image}")'>TO THE BASKET</button> 
                    </div>`
    }
}

fjArr.push(new Fj("/images/fj1.png" , "50$"))
fjArr.push(new Fj("/images/fj2.png" , "55$"))
fjArr.push(new Fj("/images/fj3.png" , "60$"))

for( i = 0 ; i < fjArr.length ; i++){
    Fjeans.innerHTML += fjArr[i].tohtml()
}


function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}









                    





























