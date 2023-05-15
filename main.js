const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

let arrayProducts = [
    {
        img: "assets/products/1.png",
        name: "Vinil num 1",
        description: "Lana Del Rey - Blue Banisters",
        price: "100 dollars",
    },
    {
        img: "assets/products/2.png",
        name: "Vinil num 2",
        description: "Florence + The Machine - High as Hope",
        price: "120 dollars",
    },
    {
        img: "assets/products/3.png",
        name: "Vinil num 3",
        description: "Melanie Martinez - K12",
        price: "85 dollars",
    },
    {
        img: "assets/products/4.png",
        name: "Vinil num 4",
        description: "Lana Del Rey - DYKTTATUOBLVD",
        price: "90 dollars",
    },
    {
        img: "assets/products/5.png",
        name: "Vinil num 5",
        description: "Ethel Cain - Preacher's Daughter", 
        price: "91 dollars",
    }, 
    {
        img: "assets/products/6.png",
        name: "Vinil num 6",
        description: "Harry Styles - Fine Line",
        price: "95 dollars",
    },
];

function getElements(){
    let container = document.querySelector("#container");
    let output = "<div class='row'>";
    let i = 0;
    arrayProducts.forEach(element => {
        let elem = "<div class='col-sm-4'><img class='img-fluid d-block' src="+ element.img +" alt="+element.name+"> <label>"+element.name+" : "+element.description+ "\n"+"price - "+element.price+"</label></div>"
        if(i % 3 == 2){
            elem += "</div><div class='row'>"
        }
        i ++;
        output += elem;
    });
    output += "</div>";
    container.innerHTML = output;
}

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "assets/images/cross.png";
    } else {
        navBtnImg.src = "assets/images/hamburg.png";
    }
}
var popup = document.getElementById("popup");
var acceptBtn = document.getElementById("accept");
var rejectBtn = document.getElementById("reject");


setTimeout(function() {
  if (!localStorage.getItem("subscribed")) {
    popup.style.display = "flex";
  }
}, 5000);


acceptBtn.addEventListener("click", function() {
  popup.style.display = "none";
  localStorage.setItem("subscribed", true);
});

rejectBtn.addEventListener("click", function() {
  popup.style.display = "none";
});
var message = document.createElement("div");
message.innerHTML = "Дякуємо за підписку!";
document.body.appendChild(message);


setTimeout(function() {
  document.body.removeChild(message);
}, 3000);




const modalWrapper = document.getElementById("modal-wrapper");
const closeButton = document.getElementById("close-button");
const timeLeftSpan = document.getElementById("time-left");

let timeLeft = 10;


setTimeout(() => {
  modalWrapper.style.display = "flex";
  const timer = setInterval(() => {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      closeButton.removeAttribute("disabled");
      timeLeftSpan.parentElement.style.display = "none";
    }
  }, 1000);
}, 10000);

closeButton.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});


function validateRegistration() {
  var username = document.forms["registrationForm"]["regUsername"].value;
  var password = document.forms["registrationForm"]["regPassword"].value;
  var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;

  if (username === "" || password === "" || confirmPassword === "") {
    alert("Please complete all fields.");
    return false;
  }

  if (password.length < 8) {
    alert("The password must contain at least 8 characters.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password mismatch.");
    return false;
  }

  
  alert("Registration completed successfully!");
  document.getElementById("registrationFormContainer").style.display = "none";
  document.getElementById("loginFormContainer").style.display = "block";

  return false; 
}

function validateLogin() {
  var username = document.forms["loginForm"]["loginUsername"].value;
  var password = document.forms["loginForm"]["loginPassword"].value;

  if (username === "" || password === "") {
    alert("Please complete all fields.");
    return false;
  }
  alert("Login successfully!");

  return false; 
}
