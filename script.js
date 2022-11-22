var setas=document.querySelectorAll('.controle')
var currentImagem = 0
var imagens = document.querySelectorAll('.imagem')
var maxImagens = imagens.length

setas.forEach(control => {
    control.addEventListener('click', () => {
        var isPrev = control.classList.contains('seta-prev')

        if (isPrev) {
            currentImagem -= 1
        } else {
            currentImagem += 1
        }

        if (currentImagem >= maxImagens) {
            currentImagem = 0
        }

        if (currentImagem < 0) {
            currentImagem = maxImagens - 1
        }

        imagens[currentImagem].scrollIntoView({
            inline: 'center',
            behavior: "smooth"
        })
    })
})