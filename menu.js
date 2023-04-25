const menuArr = [ 
    {
        id: 1,
        categoria: 'Esportes',
        subCategoria: ['Basquete', 'Futebol', 'Fórmula 1']
    },

    {
        id: 2,
        categoria: 'Economia',
        subCategoria: ['Bolsa de Valores', 'Imposto de Renda', 'Finanças Pessoais']
    }

]

let menu = menuArr.map(function(item) {
    return  `
            <li>
                <a href="#${item.categoria}">${item.categoria}</a>            
                <ul class="subMenu">${item.subCategoria.map(function(subitem) {
                        return `<li><a href="${subitem}">${subitem}</a></li>`;}).join("")}
                </ul>  
           </li>        
           `;
});

document.querySelector('.menu').innerHTML = menu.join("");
