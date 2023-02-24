let persons = [];
syncFromLocale();

class PageOptions {
  constructor(page, pageSize) {
    this.page = page;
    this.pageSize = pageSize;
  }
}
// const pageOptions = new PageOptions(1,10)
class Person {
  constructor(firstname, lastname, age, address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.address = address;
  }
}

class Address {
  constructor(region, district, street, apartment) {
    this.region = region;
    this.district = district;
    this.street = street;
    this.apartment = apartment;
  }
}

const pageOptions = new PageOptions(1, 10);
//Save to local storage
function saveToLocale() {
  localStorage.setItem("persons", JSON.stringify(persons));
}

// Local Storagedan ma'lumotlarni tekshirib ejranga chiqarish
//Get from local storage
function syncFromLocale() {
  const personsString = localStorage.getItem("persons");
  if (personsString) {
    const _persons = JSON.parse(personsString);
    if (Array.isArray(_persons)) {
      persons = [..._persons];
    }
  }
}

// Massivni tekshirishga
const PersonList = JSON.parse(localStorage.getItem("persons"))
  ? JSON.parse(localStorage.getItem("persons"))
  : [];

//Button bosishda mal olsin
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", (e) => {
  save();
  // console.log(persons);
  loadTable();
});
// localdagi malumotlarni qayta yuklab olyapti
// localStorage.setItem("persons", JSON.stringify(persons));

PersonList.push(persons);
// console.log(PersonList);

// })

function save() {
  //edit or add
  const myForm = document.forms.myForm;
  const personId = myForm.elements.personId.value;

  //form values
  let _firstname = myForm.elements.firstname.value;
  let _lastname = myForm.elements.lastname.value;
  let _age = myForm.elements.age.value;
  let _region = myForm.elements.region.value;
  let _district = myForm.elements.district.value;
  let _street = myForm.elements.street.value;
  let _apartment = myForm.elements.apartment.value;

  if (personId && personId > 0) {
    //edit
    const _item = persons.find((a) => a.id == personId);
    _item.firstname = _firstname;
    _item.age = _age;
    _item.lastname = _lastname;
    _item.region = _region;
    _item.district = _district;
    _item.street = _street;
    _item.apartment = _apartment;
  } else {
    //add
    persons.push({
      id: persons.length + 1,
      firstname: _firstname,
      lastname: _lastname,
      age: _age,
      region: _region,
      district: _district,
      street: _street,
      apartment: _apartment,
    });
    clear();
    saveToLocale();
  }
}
const selectViloyat = document.getElementById("selectViloyat");

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
];
viloyats.forEach((viloyat) => {
  const opt = document.createElement("option");

  opt.text = viloyat.text;
  // console.log(opt);
  selectViloyat.appendChild(opt);
});

function editItem(changeID) {
  //persons find item
  // console.log(id, "ID");
  const item = persons.find((a) => a.id == changeID);
  // console.log(item);
  if (item) {
    console.log("item" + item);
    //form elementlariga valuelarni set qilish
    const myForm = document.forms.myForm;
    myForm.elements.personId.value = changeID; //identificator
    myForm.elements.age.value = item.age;
    myForm.elements.firstname.value = item.firstname;
    myForm.elements.lastname.value = item.lastname;
    myForm.elements.region.value = item.region;
    myForm.elements.district.value = item.district;
    myForm.elements.street.value = item.street;
    myForm.elements.apartment.value = item.apartment;
    openModal();
    saveToLocale();
    loadTable();
    console.log(persons);
  }
  

  saveToLocale();
  loadTable();
  
}

const table_body = document.getElementById("mytable");

function loadTable() {
  table_body.innerHTML = "";
  //  sahifalash
  const start = (pageOptions.page - 1) * pageOptions.pageSize;
  const pagePersons = persons.slice(start, start + pageOptions.pageSize);
  pagePersons.forEach((e, i) => {
    table_body.innerHTML += addRow(e, i + 1);
  });
}
loadTable();

function addRow(item, index) {
  return ` <tr id='tr_${index}' onclick="selectRow(${index})">
    <td>${pageOptions.page * pageOptions.pageSize - (pageOptions.pageSize - index)
    }</td>
    <td>${item.lastname}</td>
    <td>${item.firstname}</td>
    <td>${item.age}</td>
    <td>${item.region}</td>
    <td>${item.district}</td>
    <td>${item.street}</td>
    <td>${item.apartment}</td>
    <td>
    <button class="btn btn-success"  onclick="editItem('${item.id}')">
            <img src="./img/edit.svg" width="20" height="20"></img>
    </button>      
    </td>
    <td>
    <button class = "btn btn-danger"  onclick="deleteItem(${item.id})">
    <img src="./img/delete.svg" width="20" height="20"></img>
    </button>
    </td>
</tr>`;
}
function selectRow(e) {
  // console.log(e);
  const tr = document.getElementById('tr_' + e);
  tr.classList.add("person-row-selected");
}

loadTable();
function addNew() {
  clear();
  openModal();
}

function close() {
  // const modal = document.getElementById('exampleModal');
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.hide();
}

function clear() {
  const myForm = document.forms.myForm;
  myForm.reset();
}

function openModal() {
  var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}

function deleteItem(id) {
  const item = persons.find((a) => a.id === id);
  const index = persons.indexOf(item);
  persons.splice(index, 1);
  saveToLocale();
  loadTable();
}

//PAGINATION
loadTable();
function drawPagination() {
  const pagination = document.querySelector(".pagination");
  const next = `
<li class="page-item" >
    <a class="page-link" href="javascript:(0);" aria-label="Next" onclick="next()">
        <span aria-hidden="true">&raquo;</span>
    </a>
</li>`;
  let numbers = ``;
  const pageCount = Math.ceil(persons.length / pageOptions.pageSize);
  const prev = `<li class="page-item">
<a class="page-link" href="javascript:(0);" aria-label="Previous"  onclick="prev()">
    <span aria-hidden="true">&laquo;</span>
</a>
</li>
`;
  console.log(pageOptions.page);
  for (let index = 0; index < pageCount; index++) {
    const pageNumber = index + 1;
    numbers += `<li class="page-item ${pageNumber == pageOptions.page ? "active" : ""
      }"><a class="page-link" href="javascript:(0);" onclick="onPageChanged(${pageNumber})">${pageNumber}</a></li>`;
  }
  pagination.innerHTML = prev + numbers + next;
}
drawPagination();
function onPageChanged(number) {
  console.log(number);
  pageOptions.page = number;
  loadTable();
  drawPagination();
}
function prev() {
  console.log("prev", persons.length);
  if (pageOptions.page > 1) {
    pageOptions.page -= 1;
    loadTable();
    drawPagination();
  }
}
function next() {
  const pageCount = Math.ceil(persons.length / pageOptions.pageSize);
  console.log("next", persons.length);
  if (pageOptions.page < pageCount) {
    pageOptions.page += 1;
    loadTable();
    drawPagination();
  }
}
