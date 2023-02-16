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



const PersonList = JSON.parse(localStorage.getItem('persons'))
    ? JSON.parse(localStorage.getItem('persons'))
    : []

//Button bosishda mal olsin
const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click', (e) => {
    // console.log(e);
    // const firstname = document.getElementById('firstname');
    // const lastname = document.getElementById('lastname');
    // console.log(firstname.value, lastname.value);
    const myForm = document.forms.myForm
    let _firstname = myForm.elements.ism.value
    let _lastname = myForm.elements.familiya.value
    let _age = myForm.elements.yosh.value
    let _region = myForm.elements.viloyat.value
    let _district = myForm.elements.tuman.value
    let _street = myForm.elements.kocha.value
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

const selectViloyat = document.getElementById("selectViloyat")
const viloyats = [
    {id: 1, text: "Toshkent"},
    {id: 2, text: "Sirdaryo"},
    {id: 3, text: "Jizzax"},
    {id: 4, text: "Samarqand"},
    {id: 5, text: "Navoiy"},
    {id: 6, text: "Buxoro"},
    {id: 7, text: "Qashqadaryo"},
    {id: 8, text: "Surxondaryo"},
    {id: 9, text: "Xorazm"},
    {id: 10, text: "Andijon"},
    {id: 11, text: "Namangan"},
    {id: 12, text: "Farg'ona"},
]
viloyats.forEach((viloyat) => {
    const opt = document.createElement("option");
    opt.text =viloyat.text;
    selectViloyat.appendChild(opt);
});
