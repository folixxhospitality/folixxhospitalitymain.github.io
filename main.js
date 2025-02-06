document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".frame185916-chevrondown1");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function () {
      dropdownMenu.classList.toggle("active");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove("active");
      }
  });
});
