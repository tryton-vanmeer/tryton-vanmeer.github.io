function setup_nav_menu()
{
    const burger = document.getElementById("navbar-burger");

    burger.addEventListener("click", () => {
        const target_id = burger.dataset.target;
        const target = document.getElementById(target_id);

        burger.classList.toggle("is-active");
        target.classList.toggle("is-active");
    });
}


document.addEventListener("DOMContentLoaded", () => {
    setup_nav_menu();
});