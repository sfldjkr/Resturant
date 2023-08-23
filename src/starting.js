import dumpling from './dumpling.jpg'

let fillBoilerHtml = () => {
    let contentDiv = document.querySelector('.content');
    
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('headerdiv');
    let headingH1 = document.createElement('h1');
    headingH1.innerHTML = 'हाम्रो मोमो';
    headerDiv.appendChild(headingH1);
    let homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.classList.add('homebutton');
    let menuButton = document.createElement('button'); 
    menuButton.innerText = 'Menu';
    menuButton.classList.add('menubutton');
    let contactButton = document.createElement('button');
    contactButton.innerText = `Contact`;
    contactButton.classList.add('contactbutton');
    headerDiv.appendChild(homeButton);
    headerDiv.appendChild(menuButton);
    headerDiv.appendChild(contactButton);
    contentDiv.appendChild(headerDiv);

    // creating body div
    let bodyDiv = document.createElement('div');
    bodyDiv.classList.add('bodydiv');


    contentDiv.appendChild(bodyDiv);


};

export {fillBoilerHtml}