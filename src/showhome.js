import chef from './chef.jpg'
let showHomepage = () => {
    let bodyDiv = document.querySelector('.bodydiv');
    let homediv = document.createElement('div');
    homediv.classList.add('homediv');
    bodyDiv.innerHTML = '';
    homediv.innerHTML = '';
    let hthree = document.createElement('h3');
    hthree.innerHTML = `Best Momo Near You`;
    let secondh3 = document.createElement('h3');
    secondh3.innerText = 'Made With Love And Tradition Since GrandPa';
    let dumplingIcon = new Image();
    dumplingIcon.src = chef;
    dumplingIcon.classList.add('dumpling')

    let thirdH3 = document.createElement('h3');
    thirdH3.innerHTML = 'Order Online Here Or Visit Us';

    homediv.appendChild(hthree);
    homediv.appendChild(secondh3);
    homediv.appendChild(dumplingIcon);
    homediv.appendChild(thirdH3);
    bodyDiv.appendChild(homediv);

    
};

export {showHomepage}