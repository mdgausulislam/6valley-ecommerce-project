// header drawer js start
const drawerButton = document.getElementById("drawerButton");
const drawer = document.getElementById("drawer");
const closeDrawerButton = document.getElementById("closeDrawerButton");
const navMenu = document.getElementById("navMenu");
const drawerMenu = drawer.querySelector("ul");

// Add nav menu items to drawer menu
const navItems = navMenu.querySelectorAll("li, .relative");
navItems.forEach((item) => {
  const clone = item.cloneNode(true);
  drawerMenu.appendChild(clone);
});

drawerButton.addEventListener("click", () => {
  drawer.classList.toggle("drawer-hidden");
  drawer.classList.toggle("drawer-visible");
});

closeDrawerButton.addEventListener("click", () => {
  drawer.classList.add("drawer-hidden");
  drawer.classList.remove("drawer-visible");
});

// header drawer js end

//searchbar start small device start
// document.addEventListener("DOMContentLoaded", () => {
//   const searchToggle = document.getElementById("searchToggle");
//   const searchContainer = document.getElementById("searchContainer");

//   searchToggle.addEventListener("click", () => {
//     if (searchContainer.classList.contains("hidden")) {
//       searchContainer.classList.remove("hidden");
//     } else {
//       searchContainer.classList.add("hidden");
//     }
//   });
// });

//searchbar start small device end

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

// Swiper banner section start
var swiper = new Swiper(".mySwiper3", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
});
// Swiper banner section end

// flash sales swipper start
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 640px (small devices)
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is <= 768px (medium devices)
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is <= 1024px (large devices)
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is > 1024px (extra large devices)
      1280: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
});

// flash sales swipper start

// category products
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 420px
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is <= 560px
      560: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is <= 1024px
      1024: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
  });
});

// featured products starts

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiperfeature", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 420px
      420: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is <= 560px
      560: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is <= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });
});
// featured products end

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

//view all products page start

document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("viewAlllProducts");
  const viewAllBtn = document.getElementById("viewAllProductsBtn");
  const loadMoreBtn = document.getElementById("loadMoreProductsBtn");

  const products = document.querySelectorAll(".product-item");
  const initialDisplayCount = 8;
  const firstLoadMoreCount = 12;
  const subsequentLoadMoreCount = 20;

  let currentDisplayedCount = 0;

  // Function to display products
  function displayProducts(count) {
    for (
      let i = currentDisplayedCount;
      i < currentDisplayedCount + count && i < products.length;
      i++
    ) {
      products[i].classList.remove("hidden");
    }
    currentDisplayedCount += count;
    if (currentDisplayedCount >= products.length) {
      viewAllBtn.classList.add("hidden");
      loadMoreBtn.classList.add("hidden");
    }
  }

  // Initially display the first set of products
  displayProducts(initialDisplayCount);

  // View All button click event
  viewAllBtn.addEventListener("click", function () {
    displayProducts(firstLoadMoreCount);
    viewAllBtn.classList.add("hidden");
    loadMoreBtn.classList.remove("hidden");
  });

  // Load More button click event
  loadMoreBtn.addEventListener("click", function () {
    displayProducts(subsequentLoadMoreCount);
  });
});

//products details page
document.addEventListener("DOMContentLoaded", function () {
  let featuredImg = document
    .getElementById("featured-image")
    .querySelector("img");
  let smallImgDivs = document.getElementsByClassName("small-Img");

  // Set the default featured image to the first small image
  featuredImg.src = smallImgDivs[0].querySelector("img").src;

  for (let i = 0; i < smallImgDivs.length; i++) {
    smallImgDivs[i].addEventListener("click", () => {
      let img = smallImgDivs[i].querySelector("img");
      featuredImg.src = img.src;
      for (let j = 0; j < smallImgDivs.length; j++) {
        if (i === j) {
          smallImgDivs[j].classList.add("sm-card");
        } else {
          smallImgDivs[j].classList.remove("sm-card");
        }
      }
    });
  }

  // Custom zoom effect
  let zoomContainer = document.getElementById("zoom-container");
  let zoomImage = document.getElementById("large-image");

  zoomContainer.addEventListener("mousemove", function (e) {
    const rect = zoomContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    zoomImage.style.transformOrigin = `${x}px ${y}px`;
  });
});

//user dashboard
function showContent(id, element) {
  // Hide all content sections
  const contents = document.querySelectorAll(".content-section");
  contents.forEach((content) => {
    content.classList.add("hidden");
  });

  // Show the selected content section
  document.getElementById(id).classList.remove("hidden");

  // Remove the active class from all menu items
  const menuItems = document.querySelectorAll("#menu-list li");
  menuItems.forEach((item) => {
    item.classList.remove("border-l-blue-700", "text-blue-700", "bg-gray-300");
  });

  // Add the active class to the clicked menu item
  if (element) {
    element.classList.add("border-l-blue-700", "text-blue-700", "bg-gray-300");
  }

  // Close the drawer if it is open
  const drawerCheckbox = document.getElementById("my-drawer-2");
  if (drawerCheckbox.checked) {
    drawerCheckbox.checked = false;
  }
}

// Toggle the manage account menu
document.getElementById("manage-account-btn").addEventListener("click", () => {
  document.getElementById("manage-account-menu").classList.toggle("hidden");
});

// Toggle the my orders menu
document.getElementById("my-orders-btn").addEventListener("click", () => {
  document.getElementById("my-orders-menu").classList.toggle("hidden");
});




//filter drawer page start
const drawerToggleCheckbox = document.getElementById("my-drawer-2");
const drawerContent = document.querySelector(".drawer-content");

// Close the drawer when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !drawerContent.contains(event.target) &&
    !drawerToggleCheckbox.contains(event.target)
  ) {
    drawerToggleCheckbox.checked = false;
  }
});

// Prevent the drawer from closing when clicking inside the drawer content
drawerContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// filter page grid and list items page js start
const gridIcon = document.getElementById("icon-grid");
const listIcon = document.getElementById("icon-list");
const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");

gridIcon.addEventListener("click", () => {
  gridView.classList.remove("hidden");
  listView.classList.add("hidden");
});

listIcon.addEventListener("click", () => {
  listView.classList.remove("hidden");
  gridView.classList.add("hidden");
});
// filter page grid and list items page js end

//filter drawer page end
