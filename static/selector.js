function selector() {
let ar = ['Flex', 'Sleep', 'Phone Call'];

let currentStr = ar[Math.floor (Math.random() * ar.length)]
// htmlselector.textContent = currentStr
let randomselector = document.getElementById('selector')
randomselector.innerHTML = currentStr

    return currentStr
}

let current = selector()


// selector(randomselector)