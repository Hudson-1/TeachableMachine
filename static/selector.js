function selector() {
let ar = ['Flex', 'T-Pose', 'Superhero'];

let currentStr = ar[Math.floor (Math.random() * ar.length)]
let randomselector = document.getElementById('selector')
randomselector.innerHTML = currentStr

    return currentStr
}

let current = selector()

