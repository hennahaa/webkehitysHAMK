class SiteHeader extends HTMLElement {
 connectedCallback() {
    this.innerHTML = `
    <header class="container">
    <nav class="navbar d-flex justify-content-between align-items-center fs-5 py-1 container-fluid">
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
          <span class="material-symbols-outlined px-2"><a href="#" class="nav-link">person</a></span>
          <span class="material-symbols-outlined px-2"><a href="#" class="nav-link">shopping_cart</a></span>
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