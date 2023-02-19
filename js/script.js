let incrementBtn = document.querySelector('#increment-btn');
let countText = document.querySelector('#count-el');
let saveBtn = document.querySelector('#save-btn');
let totalText = document.querySelector('#total-number');
let yolcusayac = [];
let count = 0;

function increment(){
    count += 1;
    countText.textContent = count;
}

function save(){
    yolcusayac.push(count);
    totalText.textContent = yolcusayac[yolcusayac.length-1]

    count = 0
    countText.textContent = count;

    localStorage.setItem('totalPeople', JSON.stringify(yolcusayac))
}
let lsTotalPeople = localStorage.getItem('totalPeople');
if(lsTotalPeople !== null){
    let totalPeopleJs = JSON.parse(lsTotalPeople);
    totalText.textContent = totalPeopleJs[totalPeopleJs.length-1]
}

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)