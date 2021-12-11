let time = document.getElementById('time')

let date = new Date()
let bar = document.getElementById('liquid')
// let writing = document.getElementById('letter')

// if (localStorage.getItem('nighted') == null) {
//     localStorage.setItem('nighted', true)
// }

// if (localStorage.getItem('nighted') == true || !slocalStorage.getItem('startDate')) {
//     localStorage.setItem('startDate', date)
//     localStorage.setItem('nighted', false)
// }

let countdown = setInterval(() => {
    date = new Date()
    time.innerHTML = `${(19 - date.getHours()).toString().padStart(2, '0')} ${(59 - date.getMinutes()).toString().padStart(2, '0')}<span class='s'> ${(59 - date.getSeconds()).toString().padStart(2, '0')}</span>`
    // if (date.getHours() > 20) {
    //     localStorage.setItem('nighted', true)
    //     clearInterval(countdown)
    //     time.innerHTML = `<span class=s>Snoozers, it's</span> \n Bedtime`
    // }
    // else {
    //     updateBar(date)
    // }
}, 1000);

function updateBar(date) {
    let dayhours = 19 - localStorage.getItem('startDate')?.getHours()
    bar.style.width = (19 - date.getHours()) / dayhours + '%'
}

// writing.innerHTML = localStorage.getItem('writing') || "May all your wishes come true"

// writing.addEventListener('keydown', (e) => write(e))
// writing.addEventListener('keyup', () => { localStorage.setItem('writing', writing.innerHTML) })

// function write(e) {
//     if (e.key == "Enter") {
//         document.execCommand('insertHTML', false, '<span style="width:100%; height:1em; background:brown;">__________</span><span></span>')
//     }
// }
