document.addEventListener('click', e => {


    //https://www.youtube.com/watch?v=S-VeYcOCFZw

    // usa a data atribute ([data-dropdown-link])ao inves da classe, este nome do atributo foi adicionado
    // na tag do elemento HTMLAllCollection.
    // A constante isDropdownLink checa se é um link do dropdown
    const isDropdownLink = e.target.matches("[data-dropdown-link]")

    if (!isDropdownLink && e.target.closest('[data-dropdown]') != null) return


    let currentDropdown

    //o .closest pega o pai mais proximo, no caso o menu do dropdown
    if (isDropdownLink) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }


    // Fecha todos os outros dropdowns que não estiverem selecioandos
    //percorrer todos eles (forEach)
    //se for o dropdown que estiver seleiconado, nao faz nada só retorna
    //Todos os outros dropdowns, ele remove o active e fecha eles
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown)
            return

        dropdown.classList.remove('active')
    })

})