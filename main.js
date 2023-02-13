class Person {
    constructor(firstname, lastname, age, address) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.address = address
    }
}
let persons = []
class Address {
    constructor(region, district, street, apartment) {
        this.region = region
        this.district = district
        this.street = street
        this.apartment = apartment
    }


//DOM
// console.log(document);
// document.getElementById('myDiv');
// const myDiv = document.getElementById('myDiv')
// console.log(myDiv);

// myDiv.textContent = 'test text content' //faqat text yozish uchun

// myDiv.innerHTML = '<strong>test text content</strong>' // htmldagi amallarni bajarsa bo'ladi yani html tiliga o'giradi

// const myH1 = document.createElement('h1')
// myH1.style = 'font-weight: 600'
// const mySpam = document.createElement('span')
// mySpam.innerHTML = 'This is spam';
// mySpam.style = 'color: blue'
// myH1.appendChild(mySpam)
// myDiv.innerHTML = myH1.innerHTML 
// console.log(myH1);


//query selector
// const myQuery = document.querySelectorAll('.li-item')
// console.log(myQuery.length);
// for (const iterator of myQuery) {
//     console.log(iterator.innerHTML);
}

//Button bosishda mal olsin

const PersonList = JSON.parse(localStorage.getItem('persons'))
    ? JSON.parse(localStorage.getItem('persons'))
    : []
const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click', (e) => {
    // console.log(e);
    // const firstname = document.getElementById('firstname');
    // const lastname = document.getElementById('lastname');
    // console.log(firstname.value, lastname.value);
    const myForm = document.forms.myForm
    let _firstname = myForm.elements.firstname.value
    let _lastname = myForm.elements.lastname.value
    let _age = myForm.elements.age.value
    let _region = myForm.elements.region.value
    let _district = myForm.elements.district.value
    let _street = myForm.elements.street.value
    let _apartment = myForm.elements.apartment.value
    
    persons.push(new Person(_firstname, _lastname, _age, new Address(_region, _district, _street, _apartment)))

    // function print(){
    //     let response = document.getElementById('print')
    // return response.value = JSON.stringify(persons[0])
    // } 
    // console.log(print());
    
    
    PersonList.push(persons)
    console.log(PersonList);
    // localStorage.setItem('persons', JSON.stringify(persons_list))
    // const get_from_local = localStorage.getItem('persons')

    // if (get_from_local != null) {
    //     let qosh = localStorage.setItem('persons', JSON.stringify(persons))
    //     qosh.
    // } 
    // else {
        
    // }
    
    
    console.log(get_from_local);

    // console.log(persons);
    // console.log(myForm.elements.age.value);
})
