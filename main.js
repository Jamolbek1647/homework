class PageOptions {
  constructor(page, size){
    this.page = page;
    this.size = size;
  }
}
class Person {
  constructor(firstname, lastname, age, address) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.address = address
  }
}

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
const pageOptions = new PageOptions(4,10)

let persons = []
// Massivni tekshirishga
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

  const myForm = document.getElementById('myForm')
  // const myForm = document.forms.myForm
  let _firstname = myForm.elements.firstname.value
  let _lastname = myForm.elements.lastname.value
  let _age = myForm.elements.age.value
  let _region = myForm.elements.region.value
  let _district = myForm.elements.district.value
  let _street = myForm.elements.street.value
  let _apartment = myForm.elements.apartment.value

  // persons.push(new Person(
  //   _firstname, _lastname, _age, new Address(_region, _district, _street, _apartment)))


  persons.push({
    id: persons.length + 1,
    firstname: _firstname,
    lastname: _lastname,
    age: _age,
    region: _region,
    district: _district,
    street: _street,
    apartment: _apartment

  }
  )
  // localdagi malumotlarni qayta yuklab olyapti
  localStorage.setItem("persons", JSON.stringify(persons));
  // function print(){
  //     let response = document.getElementById('print')
  // return response.value = JSON.stringify(persons[0])
  // } 
  // console.log(print());


  PersonList.push(persons)
  console.log(PersonList);
  // localStorage.setItem('persons', JSON.stringify(persons_list))
  // const get_from_local = localStorage.getItem('persons')
  // console.log(get_from_local);

  // console.log(persons);
  // console.log(myForm.elements.age.value);
})

const selectViloyat = document.getElementById("selectViloyat")

const viloyats = [
  { id: 1, text: "Toshkent" },
  { id: 2, text: "Sirdaryo" },
  { id: 3, text: "Jizzax" },
  { id: 4, text: "Samarqand" },
  { id: 5, text: "Navoiy" },
  { id: 6, text: "Buxoro" },
  { id: 7, text: "Qashqadaryo" },
  { id: 8, text: "Surxondaryo" },
  { id: 9, text: "Xorazm" },
  { id: 10, text: "Andijon" },
  { id: 11, text: "Namangan" },
  { id: 12, text: "Farg'ona" },
]
viloyats.forEach((viloyat) => {
  const opt = document.createElement("option");


  opt.text = viloyat.text;
  // console.log(opt);
  selectViloyat.appendChild(opt);
});

const persons_from_locale = localStorage.getItem("persons");
// console.log(cars_from_locale);

// Local Storagedan ma'lumotlarni tekshirib ejranga chiqarish
if (persons_from_locale != null) {
  const json = JSON.parse(persons_from_locale);
  // json obyektni ochib persons massivga yuklayapti
  persons = [...json];
  console.log(persons);
} else {
  console.log("Ma'lumot topilmadi");
}
table_body = document.getElementById("mytable")
page = 1
loadTable();

function loadTable() {
  table_body.innerHTML = "";
  //  e-obyekt k- indeks 
  persons.map((e, k) => {
    if (page == Math.floor(k / 10) + 1) {
      table_body.innerHTML += addRow(e);
    }
  }); 
}
loadTable();
function addRow(item) {
  return ` <tr>
    <td>${item.id}</td>
    <td>${item.lastname}</td>
    <td>${item.firstname}</td>
    <td>${item.age}</td>
    <td>${item.region}</td>
    <td>${item.district}</td>
    <td>${item.street}</td>
    <td>${item.apartment}</td>

    <td>
    <button class="btn btn-success"  onclick="editItem(${item.id})">
            <img src="./img/edit.svg" width="20" height="20"></img>
    </button>      
    </td>
    <td>
    <button class = "btn btn-danger"  onclick="editItem(${item.id})">
    <img src="./img/delete.svg" width="20" height="20"></img>

        </button></td>
</tr>`;
}

// function addNew() {
//   clear();
//   openModal();
// }

// function close() {
//   // const modal = document.getElementById('exampleModal');
//   var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
//   myModal.hide();

// }

// function openModal() {

//   var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
//   myModal.show();
// }

function drawPagination() {
  const pagination = document.querySelector('.pagination');
  const previous = `<li class="page-item">
  <a class="page-link" href="#" aria-label="Previous">
    <span aria-hidden="true">&laquo;</span>
  </a>
</li>`
  const numbers = ``;
  const Pagecount = Math.floor((persons.length/pageOptions.page));
  const next = `<li class="page-item">
  <a class="page-link" href="#" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </a>
</li>`
}
drawPagination();