var menu = document.getElementById("menu");

    function toggleMenu() {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }
var hamburgerMenu = document.querySelector(".hamburger-menu");
var menu = document.getElementById("menu");

    hamburgerMenu.addEventListener("click", function () {
      menu.classList.toggle("open");
    });

    var submenuItems = document.querySelectorAll(".submenu");
    var subsubmenuItems = document.querySelectorAll(".sub-submenu");

    submenuItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        item.classList.toggle("open");
      });
    });

    subsubmenuItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        item.classList.toggle("open");
      });
    });

    // Tutup submenu saat mengklik di luar
    document.addEventListener("click", function (e) {
      submenuItems.forEach(function (item) {
        if (!item.contains(e.target)) {
          item.classList.remove("open");
        }
      });
      subsubmenuItems.forEach(function (item) {
        if (!item.contains(e.target)) {
          item.classList.remove("open");
        }
      });
    });
