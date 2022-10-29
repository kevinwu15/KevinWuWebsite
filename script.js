const container = document.querySelector('#eggcontainer')
const btn = document.querySelector('#egg');
const count = document.createElement('p');
count.classList.add('count');
container.appendChild(count)

let counter = Number(localStorage.getItem("counter"))

count.textContent = "You've clicked " + counter + " times."

btn.addEventListener('click', () =>{
    ++counter
    count.textContent = "You've clicked " + counter + " times."
    localStorage.setItem("counter", JSON.stringify(counter))
})