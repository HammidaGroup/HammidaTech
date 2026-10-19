
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  searchToggle.addEventListener("click", () => {
    const isOpen = searchBar.classList.toggle("is-open");

    searchToggle.setAttribute("aria-expanded", isOpen);
    searchToggle.setAttribute(
      "aria-label",
      isOpen ? "Close search" : "Open search"
    );

    if (isOpen) searchInput.focus();
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
      searchInput.focus();
      return;
    }

    window.location.href =
      "/?q=" + encodeURIComponent(query);
  });
