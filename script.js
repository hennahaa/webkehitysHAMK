class SiteHeader extends HTMLElement {
 connectedCallback() {
    this.innerHTML = `
    <!--HEADER SM AND UP-->
    <header class="d-flex d-none d-sm-block">
    <nav class="navbar d-flex justify-content-between align-items-center fs-5 py-0 container-fluid bg-light">
        <div class="">
          <a class="navbar-brand" href="index.html">
            <img src="img/keyboard_2.png" class="img-header-logo float-start" alt="site logo">
          </a>
        </div>
        <div class="">
          <ul class="nav">
            <li class="nav-item px-2 col-4"><a href="index.html" class="nav-link nav-color fw-bolder">Shop</a></li>
            <li class="nav-item px-2 col-4"><a href="about.html" class="nav-link nav-color fw-bolder">About</a></li>
            <li class="nav-item px-2 col-4"><a href="contact.html" class="nav-link nav-color fw-bolder">Contact</a></li>
          </ul>
        </div>
        <div class="">
          <span class="material-symbols-rounded size-40 pe-3"><a href="#" class="nav-link">person</a></span>
          <span class="material-symbols-rounded size-40 pe-3"><a href="#" class="nav-link">shopping_cart</a></span>
        </div>
    </nav>
  </header>

  <!--HEADER FOR XS-->
  <header class="d-flex d-block d-sm-none aria-expanded">
    <nav class="navbar d-flex justify-content-between fs-5 py-0 container-fluid bg-light flex-row">
      <div class="col-4 d-flex justify-content-start" >
        <span class="material-symbols-rounded size-40 ps-2"><a data-bs-toggle="collapse" href="#collapse" aria-expanded="false" aria-controls="collapse" class="nav-link">menu</a></span>
        </div>
      <div class="d-flex col-4 justify-content-center">
        <a class="navbar-brand mx-auto" href="index.html">
          <img src="img/keyboard_2.png" class="img-header-logo" alt="site logo">
        </a>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <span class="material-symbols-rounded pe-2"><a href="#" class="nav-link">person</a></span>
        <span class="material-symbols-rounded pe-2"><a href="#" class="nav-link">shopping_cart</a></span>
      </div>
    <div class="collapse" id="collapse">
    <ul class="d-flex justify-content-evenly nav">
      <li class="nav-item px-2 col-4"><a href="index.html" class="nav-link nav-color fw-bolder fs-5">Shop</a></li>
      <li class="nav-item px-2 col-4"><a href="about.html" class="nav-link nav-color fw-bolder fs-5">About</a></li>
      <li class="nav-item px-2 col-4"><a href="contact.html" class="nav-link nav-color fw-bolder fs-5">Contact</a></li>
    </ul>
    </div>
    </nav>
  </header>
  `
 }
}

customElements.define('site-header', SiteHeader)

class SiteFooter extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
       <footer class="row py-5 bg-dark">
          <div class="col-sm-6 text-wrap text-light">
            <div class="col-2 ps-3">
              <div class="row row-cols-1">
                <img src="img/keyboard_2.png" class="img-footer-logo object-fit-contain float-left d-none d-md-block" alt="site logo">
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row justify-content-center">
              <div class="col-3 mx-3">
                <h5 class="footer-h">About</h5>
                <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link ps-0 text-light">Lorem Ipsum</a></li>
                  <li class="nav-item"><a href="#" class="nav-link ps-0 text-light">Dolor amet</a></li>
                  <li class="nav-item"><a href="#" class="nav-link ps-0 text-light">Consectetur</a></li>
            
                </ul>
              </div>
              <div class="col-3 mx-5">
                <h5 class="footer-h">Contact</h5>
                <ul class="nav flex-column">
                  <li class="nav-item"><a href="contact.html" class="nav-link ps-0 text-light">Customer Service</a></li>
                  <li class="nav-item"><a href="contact.html" class="nav-link ps-0 text-light">Locations</a></li>
                  <li class="nav-item"><a href="contact.html" class="nav-link ps-0 text-light">Socials</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
     `
    }
   }

   customElements.define('site-footer', SiteFooter)

/*Declaration of ind--- variable to make the buttons work*/
var currentQuantity;

/*Add from the counter*/
   function add() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentQuantity = parseInt(quantityInput.value);

    if (!isNaN(currentQuantity)) {
        quantityInput.value = currentQuantity + 1;
    }
}
/*Subtract from the counter*/
function subtract() {
    var quantityInput = document.querySelector('.quantity-input');
    var currentQuantity = parseInt(quantityInput.value);

    if (!isNaN(currentQuantity) && currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

/*Add stuff to cart and reset the counter*/
function addToCart() {
    currentQuantity = 1;
}

/*Display message*/
function messagePop() {
  const message = document.getElementById("message");
  if(currentQuantity==1) {
    message.innerText = "Item added to cart!"
  }
  else {
  message.innerText = currentQuantity + " items added to cart!";
  }
  
}

/*Begone, text!*/
setTimeout(()=>{
  const sometext=document.getElementById("message");
  sometext.style.display="none";
},7500);