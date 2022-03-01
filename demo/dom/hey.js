function heyYall() {
    let paragraph = document.createElement('p')
    paragraph.innerHTML = "hey y'all!!!"
    document.getElementById('text').appendChild(paragraph)
}

document.getElementById('hey').addEventListener('click', heyYall)
