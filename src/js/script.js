
// -----------section-2-------------------------------

const mainCartDivider = document.querySelector(".main_cart_divider");

for (let i = 0; i < 9; i++) {
  const card = document.createElement("div");
  card.classList.add("main_cart");
  const img = document.createElement("img");
  img.classList.add("main_cart_img");
  img.src = "./public/image.png";
  const cardText = document.createElement("div");
  cardText.classList.add("main_cart_text");
  const cardTextTitle = document.createElement("p");
  cardTextTitle.classList.add("main_cart_text_title");
  cardTextTitle.textContent = "Кроссовки Nike Air Force 1 '07 QS";
  const cardTextPrice = document.createElement("p");
  cardTextPrice.classList.add("main_cart_text_price");
  cardTextPrice.textContent = "11 000 р₽ ";

  cardText.appendChild(cardTextTitle);
  cardText.appendChild(cardTextPrice);
  card.appendChild(img);
  card.appendChild(cardText);
  mainCartDivider.appendChild(card);
}

const mainSectionButton = document.querySelector(".main_section");
const catalog_section_title_divider = document.querySelector(
  ".catalog_section_title_divider"
);
const catalog_section_title_divider_2 = document.querySelector(
  ".catalog_section_title_divider_2"
);


//-------------------section-4------------------
const title = document.createElement("h2");
title.classList.add("catalog_section_title");
title.textContent = "Мы подберем идеальную пару для вас";

const text = document.createElement("p");
text.classList.add("catalog_section_text");
text.textContent =
  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями";

const divider_line = document.createElement("div");
divider_line.classList.add("catalog_line_models");

const divider_line_2 = document.createElement("div");
divider_line_2.classList.add("catalog_line_models_2");

const catalog_text = document.createElement("p");
catalog_text.classList.add("catalog_text_models_text");
catalog_text.textContent = "Какой тип кроссовок рассматриваете?";
const catalog_text_divider = document.createElement("div");
const catalog_text_2 = document.createElement("p");
catalog_text_2.classList.add("catalog_text_models_text_bottom");
catalog_text_2.textContent = "1 из 3";

const catalog_text_divider_btn = document.createElement("button");
catalog_text_divider_btn.classList.add("catalog_text_models_text_btn");
catalog_text_divider_btn.textContent = "Далее";

title.appendChild(text);
catalog_section_title_divider.appendChild(title);
catalog_section_title_divider.appendChild(divider_line);
catalog_section_title_divider.appendChild(divider_line_2);
catalog_section_title_divider.appendChild(catalog_text);
catalog_section_title_divider.appendChild(catalog_text_divider);
catalog_text_divider.appendChild(catalog_text_2);
catalog_text_divider.appendChild(catalog_text_divider_btn);

for (let i = 0; i < 1; i++) {
  const card = document.createElement("div");
  card.classList.add("main_section_button");
  const button = document.createElement("button");
  button.classList.add("main_section_button_link");
  button.textContent = "Показать еще";
  card.appendChild(button);
  mainSectionButton.appendChild(card);
}

const card_models_catalog = document.querySelector(".model_catalog_card");

for (let i = 0; i < 6; i++) {
  const cart = document.createElement("div");
  cart.classList.add("model_catalog_cart");

  const img = document.createElement("img");
  img.classList.add("model_catalog_img");
  img.src = "./public/photo_krossovki.png";

  const textcheck = document.createElement("input");
  textcheck.classList.add("model_catalog_textcheck");
  textcheck.type = "checkbox";

  const text = document.createElement("p");
  text.classList.add("model_catalog_text");
  text.textContent = "кеды";

  cart.appendChild(img);
  cart.appendChild(textcheck);
  cart.appendChild(text);
  card_models_catalog.appendChild(cart);
}

// --------------------section-5--------------------




const galarey = document.querySelector(".galary_section_divider");
const galarey_card_aray = [

    {
        id : 1,
        img: "./public/iimage_galarey_1.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },
    {   
        id : 2,
        img: "./public/image_galarey_2.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },
    {   
        id : 3,
        img: "./public/image_galarey_3.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },
    {   
        id : 4,
        img: "./public/image_galarey_4.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },
    {   
        id : 5,
        img: "./public/image_galarey_5.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },
    {   
        id : 6,
        img: "./public/image_galarey_6.jpg",
        name: "Максим Золотарев",
        degree: "Администратор",
    },

    ];

for (let i = 0; i < 6; i++) {
    const galarey_card = document.createElement("div");
    galarey_card.classList.add("galary_section_card");
    const galarey_img = document.createElement("img");
    galarey_img.classList.add("galary_section_img");
    galarey_img.src = `./public/image_galarey_${i + 1}.jpg`;
    const galarey_text = document.createElement("p");
    galarey_text.classList.add("galary_section_text");
    const galarey_text_2 = document.createElement("p");
    galarey_text_2.classList.add("galary_section_text_2");
    galarey_text.textContent = `${galarey_card_aray[i].name}`;
    galarey_text_2.textContent = `${galarey_card_aray[i].degree}`;
    galarey_card.appendChild(galarey_img);
    galarey_card.appendChild(galarey_text);
    galarey_card.appendChild(galarey_text_2);
    galarey.appendChild(galarey_card);

}



