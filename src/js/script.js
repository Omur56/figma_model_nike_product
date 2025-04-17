const mainCartDivider = document.querySelector('.main_cart_divider');


for (let i = 0; i < 9; i++) {
    const card = document.createElement('div');
    card.classList.add('main_cart');
    const img = document.createElement('img');
    img.classList.add('main_cart_img');
    img.src = "./public/image.png";
    const cardText = document.createElement('div');
    cardText.classList.add('main_cart_text');
    const cardTextTitle = document.createElement('p');
    cardTextTitle.classList.add('main_cart_text_title');
    cardTextTitle.textContent = "Кроссовки Nike Air Force 1 '07 QS";
    const cardTextPrice = document.createElement('p');
    cardTextPrice.classList.add('main_cart_text_price');
    cardTextPrice.textContent = "11 000 р₽ ";
    cardText.appendChild(cardTextTitle);
    cardText.appendChild(cardTextPrice);
    card.appendChild(img);
    card.appendChild(cardText);
    mainCartDivider.appendChild(card);
}

const mainSectionButton = document.querySelector('.main_section');

for (let i = 0; i < 1; i++) {
    const card = document.createElement('div');
    card.classList.add('main_section_button');
    const button = document.createElement('button');
    button.classList.add('main_section_button_link');
    button.textContent = "Показать еще";
    card.appendChild(button);
    mainSectionButton.appendChild(card);
}

