const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')

const list = document.querySelector('.list')
const thumb = document.querySelector('.thumb')
const container = document.querySelector('.container')


const mudarConteudo = (type) => {
    const listItem = document.querySelectorAll('.list-item')
    const thumbItem = document.querySelectorAll('.thumb-item')


    if (type === 'next') {
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
        container.classList.add('next')
    } else {
        list.prepend(listItem[listItem.length - 1])
        thumb.prepend(thumbItem[thumbItem.length - 1])
        container.classList.add('back')
    }



    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 900);
}











btnNext.addEventListener('click', () => mudarConteudo('next'))
btnBack.addEventListener('click', () => mudarConteudo('back'))