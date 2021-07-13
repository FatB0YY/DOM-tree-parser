window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    let textNodes = []

    function recursy(element) {
        element.childNodes.forEach((node) => {
            // все, кроме #text
            // if (node.nodeName === '#text') {
            //     return
            // } else {
            //     console.log(node)
            //     recursy(node)
            // }

            // все заголовки
            // создаем объект из данных
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent.trim(),
                }
                textNodes.push(obj)
            } else {
                recursy(node)
            }
        })
    }
    recursy(body)
    console.log(textNodes)

    // // отправляем данные на сервер через fecth
    // fetch('https://jsonplaceholder.tapicode.com/post', {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(textNodes),
    //     })
    //     .then((res) => res.json())
    //     .then((json) => console.log(json))
})