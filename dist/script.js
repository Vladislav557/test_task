const tab = () => {
  const tabNav = document.querySelectorAll(".tab-item");
  const tabContent = document.querySelector(".tabs");

  tabNav.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const dataset = item.dataset.tabName;

      const tab = tabContent.querySelector(
        `.tab[data-content-name="${dataset}"]`
      );

      item
        .closest(".tabs__nav")
        .querySelector(".active")
        .classList.remove("active");

      tabContent.querySelector(".active").classList.remove("active");

      tab.classList.add("active");
      item.classList.add("active");
    });
  });
};

tab();
