const linksMenu = document.querySelectorAll('.links-menu-li')
const sectionPrincipais = document.querySelector('.personagens-principais')
const sectionHashiras = document.querySelector('.personagens-hashiras')
const sectionViloes = document.querySelector('.personagens-viloes')

linksMenu.forEach((section, i) => {
    section.addEventListener('click', () => {
        switch (i) {
            case 0:
                sectionPrincipais.classList.remove('d-none')

                sectionHashiras.classList.add('d-none')
                sectionViloes.classList.add('d-none')
    
                break;
            case 1:
                sectionHashiras.classList.remove('d-none')

                sectionPrincipais.classList.add('d-none')
                sectionViloes.classList.add('d-none')
    
                break;
            case 2:
                sectionViloes.classList.remove('d-none')

                sectionPrincipais.classList.add('d-none')
                sectionHashiras.classList.add('d-none')
    
                break;
            default:
                break;
        }
    })
})

const btnPrincipais = document.querySelectorAll('.btn-principais');
const personagensPrincipais = document.querySelectorAll('.personagem-principais');

btnPrincipais.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        const btnSelecionado = document.querySelector('.btn-principais.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-principais.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensPrincipais[i].classList.add('selecionado');

    })
})  

const btnHashiras = document.querySelectorAll('.btn-hashiras');
const personagensHashiras = document.querySelectorAll('.personagem-hashiras');

btnHashiras.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        const btnSelecionado = document.querySelector('.btn-hashiras.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-hashiras.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensHashiras[i].classList.add('selecionado');

    })
})   

const btnViloes = document.querySelectorAll('.btn-viloes');
const personagensViloes = document.querySelectorAll('.personagem-viloes');

btnViloes.forEach((btn, i) => {
    btn.addEventListener('click', () => {

        const btnSelecionado = document.querySelector('.btn-viloes.selecionado');
        btnSelecionado.classList.remove('selecionado'); 
        
        const perSelecionado = document.querySelector('.personagem-viloes.selecionado');
        perSelecionado.classList.remove('selecionado')

        btn.classList.add('selecionado');
        personagensViloes[i].classList.add('selecionado');

    })
})