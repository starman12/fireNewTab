let time = document.getElementById('time')

let date = new Date()
let writing = document.getElementById('letter')

let countdown = setInterval(() => {
    date = new Date()
    time.innerHTML = `${(19 - date.getHours()).toString().padStart(2, '0')} ${(59 - date.getMinutes()).toString().padStart(2, '0')}<span class='s'> ${(59 - date.getSeconds()).toString().padStart(2, '0')}</span>`
}, 1000);

writing.innerHTML = localStorage.getItem('writing') || "May all your wishes come true"

writing.addEventListener('keydown', (e) => write(e))
writing.addEventListener('keyup', () => { localStorage.setItem('writing', writing.innerHTML) })

function write(e) {
    if (e.key == "Enter") {
        console.log('ere');
        document.execCommand('insertHTML', false, '<span style="width:100%; height:1em; background:brown;">__________</span><span></span>')
    }
}
