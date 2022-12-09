/**
 * Modifica a div menu para ficar visualmente visivel/invisivel
 * @return {any}
 */
function menu()
{
    const menu = document.getElementById("menu");

    if (menu.style.display === "flex")
    {
        menu.style.display = "none";
        return;
    }

    menu.style.display = "flex";
    menu.style.animation = "menuSide";
    menu.style.animationDuration = "3s";
}
