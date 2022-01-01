console.log("this is my library");
// constructor
function Book(name, aurthor, type) {
  this.name = name;
  this.aurthor = aurthor;
  this.type = type;
}

// display constructor
function Display() {}

// Add method to dispaly prototype

// implement add function
Display.prototype.add = function (book) {
  console.log("adding to ui");
  tablebody = document.getElementById("tablebody");
  let uistring = ` <tr>
                             <td>${book.name}</td>
                             <td>${book.aurthor}</td>
                             <td>${book.type}</td>
                         </tr> `;
  tablebody.innerHTML += uistring;
};
// implement clear function
Display.prototype.clear = function () {
  let libraryfrom = document.getElementById("libraryform");
  libraryfrom.reset();
};

// implement validate function

Display.prototype.validate = function(book){
  if (book.name.length<2 || book.aurthor.length<2 || book.type.length<2 )
  {
    return false;
}
else{
    return true;
}
}

// implement show function

Display.prototype.show = function(type, displaymessage){
    let message = document.getElementById("message");
    message.innerHTML =`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message: </strong>${displaymessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <span aria-hidden="true">&time;</span>
                        </div>`
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);                    

}



// Add submit event listner

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", addbtnsubmit);

function addbtnsubmit(e) {
  console.log("you have library form");
  let name = document.getElementById("bookname").value;
  let aurthor = document.getElementById("aurthor").value;
  let type = document.getElementById("type").value;

  let book = new Book(name, aurthor, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {

    display.add(book);
    display.clear();
    display.show("Success","Your book has been successfully added")
  }
  else{
      display.show("Error","Note (Book name,aurthor name and type of book ) must have 3words.")
  }
  e.preventDefault();
}
