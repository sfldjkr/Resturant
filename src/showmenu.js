import greenmomo from './green-momo.jpg'
import kfcmomo from './friedmomo.jpeg'
import openmomo from './openmomo.jpeg'
import shusimomo from './shushimomo.jpg'
import soupmomo from './soupmomo.jpeg'
import tandmomo from './tandoor.jpg'

let showMenu = () => {
    let bodyDiv = document.querySelector('.bodydiv');
    bodyDiv.innerText = '';
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menudiv')

    // create each card for each menu
    
    let momoDivOne = document.createElement('div');
    momoDivOne.classList.add('carddiv');
    let greenmomopic = new Image();
    greenmomopic.src = greenmomo;
    let greenMomoH2 = document.createElement('h2');
    greenMomoH2.innerText = 'Green Chilli MoMo'
    let greenMomoRecipe = document.createElement('p');
    greenMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivOne.appendChild(greenmomopic);
    momoDivOne.appendChild(greenMomoH2);
    momoDivOne.appendChild(greenMomoRecipe);

    let momoDivtwo = document.createElement('div');
    momoDivtwo.classList.add('carddiv');
    let kfcMomoPic = new Image();
    kfcMomoPic.src = kfcmomo;
    let kfcMomoH2 = document.createElement('h2');
    kfcMomoH2.innerText = 'Krunchy Fried MoMo'
    let kfcMomoRecipe = document.createElement('p');
    kfcMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivtwo.appendChild(kfcMomoPic);
    momoDivtwo.appendChild(kfcMomoH2);
    momoDivtwo.appendChild(kfcMomoRecipe);


    let momoDivfour = document.createElement('div');
    momoDivfour.classList.add('carddiv');
    let sushiMomoPic = new Image();
    sushiMomoPic.src = shusimomo;
    let sushiMomoH2 = document.createElement('h2');
    sushiMomoH2.innerText = 'Sushi MoMo'
    let sushiMomoRecipe = document.createElement('p');
    sushiMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivfour.appendChild(sushiMomoPic);
    momoDivfour.appendChild(sushiMomoH2);
    momoDivfour.appendChild(sushiMomoRecipe);

    let momoDivthree = document.createElement('div');
    momoDivthree.classList.add('carddiv');
    let openMomoPic = new Image();
    openMomoPic.src = openmomo;
    let openMomoH2 = document.createElement('h2');
    openMomoH2.innerText = 'Open Heart MoMo'
    let openMomoRecipe = document.createElement('p');
    openMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivthree.appendChild(openMomoPic);
    momoDivthree.appendChild(openMomoH2);
    momoDivthree.appendChild(openMomoRecipe);


    // soup momo

    let momoDivfive = document.createElement('div');
    momoDivfive.classList.add('carddiv');
    let soupMomoPic = new Image();
    soupMomoPic.src = soupmomo;
    let soupMomoH2 = document.createElement('h2');
    soupMomoH2.innerText = 'Garlic Creamy MoMo'
    let soupMomoRecipe = document.createElement('p');
    soupMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivfive.appendChild(soupMomoPic);
    momoDivfive.appendChild(soupMomoH2);
    momoDivfive.appendChild(soupMomoRecipe);

    let momoDivsix = document.createElement('div');
    momoDivsix.classList.add('carddiv');
    let tandMomoPic = new Image();
    tandMomoPic.src = tandmomo;
    let tandMomoH2 = document.createElement('h2');
    tandMomoH2.innerText = 'Tandoori MoMo'
    let tandMomoRecipe = document.createElement('p');
    tandMomoRecipe.innerHTML = `lorem ipsum lorem ipsum lorem impsum lorem ipsum`;
    momoDivsix.appendChild(tandMomoPic);
    momoDivsix.appendChild(tandMomoH2);
    momoDivsix.appendChild(tandMomoRecipe);




    menuDiv.appendChild(momoDivOne);
    menuDiv.appendChild(momoDivtwo);
    menuDiv.append(momoDivfour);
    menuDiv.appendChild(momoDivthree);
    menuDiv.appendChild(momoDivfive);
    menuDiv.appendChild(momoDivsix);
    bodyDiv.appendChild(menuDiv);

};



export {showMenu}