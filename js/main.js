// ---------------------------------------- Close Navbar Automatically After clicking a link ---------

let navlinks = document.querySelectorAll('.nav-link');
let navbutton = document.querySelector('nav button');
let navmenu = document.getElementById('navbarSupportedContent');

navlinks.forEach((link) => {
  link.addEventListener('click', function () {
    navbutton.classList.add('collapsed');
    navmenu.classList.remove('show');
  });
});

// ---------------------------------------- Get Up to Date Year in Footer ---------

let datey = document.getElementById('date');
datey.innerHTML = new Date().getFullYear();
