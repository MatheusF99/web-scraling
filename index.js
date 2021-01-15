const fs = require('fs');
const puppeteer = require('puppeteer');




(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/jefftewf`);
  // await page.screenshot({path: 'rocketseat.png'});

  const imgList = await page.evaluate(( ) => {
      // pegar as img que estao na parte dos posts
        const nodeList = document.querySelectorAll('article img')
      //tranformar o nodeList em array
        const imgArray = [...nodeList]
      // transforamar os elemntos html em elemntos js
        const imgList = imgArray.map(img =>(
          {
            src: img.src
          }
        ))
      // tirar de dentro da funcao
      return imgList
  })
  
  //escrever os dados em um arquivo local
  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err =>{
    if(err) throw new Error('algo deu errado')

    console.log('Feito');
  })

  await browser.close();
})(); 