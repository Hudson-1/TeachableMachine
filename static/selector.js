function selector(htmlselector) {
let ar = ['Flex', 'Sleep', 'Phone Call'];

htmlselector.textContent = ar[Math.floor (Math.random() * ar.length)]


}

let randomselector = document.getElementById('selector')

selector(randomselector)