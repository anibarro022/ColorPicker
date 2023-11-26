let userColor = document.getElementById("eye-dropper").value.replace('#', '');
let colorScheme = document.getElementById("select-menu").value;



document.getElementById("eye-dropper").onchange = function() {
    userColor = document.getElementById("eye-dropper").value.replace('#', '');
    console.log(userColor);
  }

document.getElementById("select-menu").onchange = function() {
    colorScheme = this.value;
    console.log(colorScheme);
}


document.getElementById('color-picker').addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${userColor}&format=json&mode=${colorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("color-palette-1").innerHTML = `
            <img src="${data.colors[0].image.bare}">
            `
            document.getElementById("color-palette-2").innerHTML = `
            <img src="${data.colors[1].image.bare}">
            `
            document.getElementById("color-palette-3").innerHTML = `
            <img src="${data.colors[2].image.bare}">
            `
            document.getElementById("color-palette-4").innerHTML = `
            <img src="${data.colors[3].image.bare}">
            `
            document.getElementById("color-palette-5").innerHTML = `
            <img src="${data.colors[4].image.bare}">
            `
            document.getElementById("color-1").innerHTML = `
            ${data.colors[0].hex.value}
            `
            document.getElementById("color-2").innerHTML = `
            ${data.colors[1].hex.value}
            `
            document.getElementById("color-3").innerHTML = `
            ${data.colors[2].hex.value}
            `
            document.getElementById("color-4").innerHTML = `
            ${data.colors[3].hex.value}
            `
            document.getElementById("color-5").innerHTML = `
            ${data.colors[4].hex.value}
            `
        })
    })