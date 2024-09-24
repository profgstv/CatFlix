const trocaVid = document.querySelectorAll('.btn-vid');

trocaVid.forEach(button => {
    button.addEventListener('click', function(){
        const atualVid = document.querySelector('.reprodutor.ativo');
        const proxVid = 'vid-' + this.getAttribute('data-vid');
        const atualMinVid = document.querySelector('.btn-vid.pressed');
        const proxMinVid = 'minvid-' + this.getAttribute('data-vid');

        atualVid.classList.remove('ativo');
        document.getElementById(proxVid).classList.add('ativo');
        atualMinVid.classList.remove('pressed');
        document.getElementById(proxMinVid).classList.add('pressed');
    })
})