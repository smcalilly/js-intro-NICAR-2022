console.log(georgiaWriters)

function listWriters() {
    let list = document.createElement('ul')

    georgiaWriters.forEach(writer => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<strong>${writer.name}</strong> wrote ${writer.publishedBooks} books. <i>${writer.bestBook}</i> is one of ${writer.name}'s most popular books.`
        list.appendChild(listItem)
    })

    document.getElementById('text').appendChild(list)
}

document.getElementById('hi').addEventListener('click', listWriters)
