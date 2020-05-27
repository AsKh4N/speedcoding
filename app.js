const imgArray = document.querySelectorAll('.figure')
const layout = document.querySelector('.main')

const arrayBtn = document.querySelectorAll('.filter')

const test = (filter) => {
    arrayBtn.forEach(el => {
        if(el.className.includes(filter)) {
            el.style.background = '#294cfe';
            el.style.color = 'white';
        } else {
            el.style.background = 'white';
            el.style.color = 'black';
        }
    })
    displayAll();
    if (filter !== 'all') {
        imgArray.forEach(el => {
            if(!el.className.includes(filter)) {
                el.style.display = 'none';
            }
        })
    } else displayAll();
}

const displayAll = () => {
    imgArray.forEach(el => {
        el.style.display = 'block';
    })
}
