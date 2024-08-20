// header drawer js start
const drawerButton = document.getElementById("drawerButton");
const drawer = document.getElementById("drawer");
const closeDrawerButton = document.getElementById("closeDrawerButton");

drawerButton.addEventListener("click", () => {
  drawer.classList.toggle("drawer-hidden");
  drawer.classList.toggle("drawer-visible");
});

closeDrawerButton.addEventListener("click", () => {
  drawer.classList.add("drawer-hidden");
  drawer.classList.remove("drawer-visible");
});
// header drawer js end

// header user dropdown menu js start
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });

  // Optional: Hide the dropdown menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

// header user dropdown menu js end

// Function to hide all dropdowns
function hideAllDropdowns() {
  document.getElementById("CategoriesDropdownMenu").classList.add("hidden");
  document
    .getElementById("subCategoriesDropdownMenu")
    .classList.add("hidden", "opacity-0", "translate-y-2");
  document.getElementById("brand-dropdown").classList.add("hidden");
}

// Function to handle dropdown toggle with smooth transition
function toggleDropdown(buttonId, dropdownId) {
  const button = document.getElementById(buttonId);
  const dropdown = document.getElementById(dropdownId);

  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the event from propagating to the document
    hideAllDropdowns(); // Hide all dropdowns first
    dropdown.classList.toggle("hidden");
    if (!dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("opacity-0", "translate-y-2");
    } else {
      dropdown.classList.add("opacity-0", "translate-y-2");
    }
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add("hidden", "opacity-0", "translate-y-2");
    }
  });
}

// Toggle for Categories dropdown
toggleDropdown("categoriesButton", "CategoriesDropdownMenu");

// Toggle for Subcategories dropdown
document
  .getElementById("subCategoriesButton")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the event from propagating to the document
    const subDropdown = document.getElementById("subCategoriesDropdownMenu");
    subDropdown.classList.toggle("hidden");
    if (!subDropdown.classList.contains("hidden")) {
      subDropdown.classList.remove("opacity-0", "translate-y-2");
    } else {
      subDropdown.classList.add("opacity-0", "translate-y-2");
    }
  });

document.addEventListener("click", function (event) {
  const subButton = document.getElementById("subCategoriesButton");
  const subDropdown = document.getElementById("subCategoriesDropdownMenu");
  if (
    !subButton.contains(event.target) &&
    !subDropdown.contains(event.target)
  ) {
    subDropdown.classList.add("hidden", "opacity-0", "translate-y-2");
  }
});

// Toggle for Brand dropdown
toggleDropdown("brand-button", "brand-dropdown");

// Swiper banner section start
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000, // Delay between slides in milliseconds
    disableOnInteraction: true, // Continue autoplay after user interactions
  },
});

// flash sales swipper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// category products
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// best selling products page
document.addEventListener("DOMContentLoaded", function () {
  const viewAllButton = document.getElementById("bestSellingButton");
  const cardContainer = document.getElementById("bestSellingCards");
  const hiddenCards = cardContainer.querySelectorAll(".hidden");

  viewAllButton.addEventListener("click", function () {
    hiddenCards.forEach((card) => {
      card.classList.remove("hidden");
    });
    viewAllButton.style.display = "none";
  });
});
