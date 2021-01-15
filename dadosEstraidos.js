(async()=>{
    const response = await fetch('./instagram.json')
    const data = await response.json()

    // formatar os dadsos
        const htmlList = data
        .map(image => `<li><img src='${image.src}'></li>`)
        .join('')
    //colocar no html
        document.querySelector('.container').innerHTML =htmlList
})()