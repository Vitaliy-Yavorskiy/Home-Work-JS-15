let btn = document.getElementById('btn');
let text = document.getElementById('text');
let ul = document.getElementById('ul');

btn.addEventListener('click', () => {
    ul.innerHTML += `<li><input type="checkbox" onclick name="task" id="">${text.value}</li>`
    text.value = ''
})
ul.addEventListener('click', (event) => {
    if (event.target.checked && ul.children.length > 1) {
        event.target.parentElement.remove()
    } else {
        event.target.checked = false
    }
})