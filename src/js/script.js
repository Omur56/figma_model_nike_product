// -----------section-2-------------------------------

const mainCartDivider = document.querySelector(".main_cart_divider");

for (let i = 0; i < 9; i++) {
  const card = document.createElement("div");
  card.classList.add("main_cart");

  const img = document.createElement("img");
  img.classList.add("main_cart_img");
  img.src = "./public/image.png";
  img.alt = "shoes";

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

//-------------------section-4------------------

const mainSectionButton = document.querySelector(".main_section");
const catalog_section_title_divider = document.querySelector(
  ".catalog_section_title_divider"
);
const catalog_section_title_divider_2 = document.querySelector(
  ".catalog_section_title_divider_2"
);
const card_models_catalog = document.querySelector(".model_catalog_card");

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
catalog_text_divider.classList.add("catalog_text_divider");

const catalog_text_2 = document.createElement("p");
catalog_text_2.classList.add("catalog_text_models_text_bottom");
catalog_text_2.textContent = "1 из 3";

const catalog_text_divider_btn = document.createElement("button");
catalog_text_divider_btn.classList.add("catalog_text_models_text_btn");
catalog_text_divider_btn.textContent = "Далее";

const card = document.createElement("div");
card.classList.add("main_section_button");

const button = document.createElement("button");
button.classList.add("main_section_button_link");

button.textContent = "Показать еще";
card.appendChild(button);
mainSectionButton.appendChild(card);

for (let i = 0; i < 6; i++) {
  const cart = document.createElement("div");
  cart.classList.add("model_catalog_cart");

  const img = document.createElement("img");
  img.classList.add("model_catalog_img");
  img.src = "./public/photo_krossovki.png";
  img.alt = "shoes";

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

title.appendChild(text);
catalog_section_title_divider.appendChild(title);
catalog_section_title_divider.appendChild(divider_line);
catalog_section_title_divider.appendChild(divider_line_2);
catalog_section_title_divider.appendChild(catalog_text);
catalog_section_title_divider.appendChild(catalog_text_divider);
catalog_text_divider.appendChild(catalog_text_2);
catalog_text_divider.appendChild(catalog_text_divider_btn);

// --------------------section-5--------------------

const galarey = document.querySelector(".galary_section_divider");
const galarey_card_array = [
  {
    id: 1,
    img: "./public/image_galarey_1.jpg",
    name: "Максим Золотарев",
    degree: "Администратор",
  },
  {
    id: 2,
    img: "./public/image_galarey_2.jpg",
    name: "Максим Золотарев",
    degree: "Администратор",
  },
  {
    id: 3,
    img: "./public/image_galarey_3.jpg",
    name: "Максим Золотарев",
    degree: "Администратор",
  },
  {
    id: 4,
    img: "./public/image_galarey_4.jpg",
    name: "Максим Золотарев",
    degree: "Администратор",
  },
  {
    id: 5,
    img: "./public/image_galarey_5.jpg",
    name: "Максим Золотарев",
    degree: "Администратор",
  },
  {
    id: 6,
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
  galarey_img.alt = "galarey image";

  const galarey_text = document.createElement("p");
  galarey_text.classList.add("galary_section_text");

  const galarey_text_2 = document.createElement("p");
  galarey_text_2.classList.add("galary_section_text_2");

  galarey_text.textContent = `${galarey_card_array[i].name}`;
  galarey_text_2.textContent = `${galarey_card_array[i].degree}`;

  galarey_card.appendChild(galarey_img);
  galarey_card.appendChild(galarey_text);
  galarey_card.appendChild(galarey_text_2);
  galarey.appendChild(galarey_card);
}

// --------------------section-6--------------------

const questions_asked_section = document.querySelector(
  ".questions_asked_section"
);
const questions_asked_divider_title = document.querySelector(
  ".questions_asked_divider_title"
);

const questions_asked_text = document.createElement("h2");
questions_asked_text.classList.add("questions_asked_text_title");
questions_asked_text.textContent = "Часто задаваемые вопросы";
questions_asked_section.appendChild(questions_asked_text);

const questions_asked_text_line = document.createElement("div");
questions_asked_text_line.classList.add("questions_asked_text_div_line");
questions_asked_section.appendChild(questions_asked_text_line);

const questions_asked_text_div = document.createElement("p");
questions_asked_text_div.classList.add("question_1");
questions_asked_text_div.textContent = "Вопрос 1";
questions_asked_section.appendChild(questions_asked_text_div);

const questions_asked_text_5 = document.createElement("p");
questions_asked_text_5.classList.add("question_2");
questions_asked_text_5.textContent = "\u2715";
questions_asked_section.appendChild(questions_asked_text_5);

const questions_asked_text_6 = document.createElement("p");
questions_asked_text_6.classList.add("question_answer");
questions_asked_text_6.textContent =
  "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими  другими людьми";
questions_asked_section.appendChild(questions_asked_text_6);

const quest_asked_center_line = document.createElement("div");
quest_asked_center_line.classList.add("quest_asked_center_line");
questions_asked_section.appendChild(quest_asked_center_line);

const questions_asked_text_7 = document.createElement("p");
questions_asked_text_7.classList.add("question_3");
questions_asked_text_7.textContent = "Вопрос 2";
questions_asked_section.appendChild(questions_asked_text_7);

const questions_asked_text_8 = document.createElement("p");
questions_asked_text_8.classList.add("question_4");
questions_asked_text_8.textContent = "+";
questions_asked_section.appendChild(questions_asked_text_8);

const questions_asked_bottom_line = document.createElement("div");
questions_asked_bottom_line.classList.add("question_asked_bottom_line");
questions_asked_section.appendChild(questions_asked_bottom_line);

// --------------------section-7------------------

const contacts_section = document.querySelector(".contacts_section");

const contact_divider = document.createElement("div");
contact_divider.classList.add("contact_divider");
contacts_section.appendChild(contact_divider);

const contacts_section_text = document.createElement("h2");
contacts_section_text.classList.add("contacts_section_text");
contacts_section_text.textContent = "Контакты";
contact_divider.appendChild(contacts_section_text);

const contacts_section_text_2 = document.createElement("p");
contacts_section_text_2.classList.add("offiece_text");
contacts_section_text_2.textContent = "Главный офис";
contact_divider.appendChild(contacts_section_text_2);

const contacts_section_text_2_2 = document.createElement("div");
contacts_section_text_2_2.classList.add("offiece_text_1");
contacts_section_text_2_2.textContent = "?";
contact_divider.appendChild(contacts_section_text_2_2);

const contacts_section_img = document.createElement("img");
contacts_section_img.classList.add("contacts_section_img");
contacts_section_img.src = "./public/open_tooltip.png";
contact_divider.appendChild(contacts_section_img);

const contacts_section_text_4 = document.createElement("p");
contacts_section_text_4.classList.add("offiece_text_3");
contacts_section_text_4.textContent = "+7 800 789 89 89";
contact_divider.appendChild(contacts_section_text_4);

const contacts_section_text_5 = document.createElement("p");
contacts_section_text_5.classList.add("offiece_text_4");
contacts_section_text_5.textContent =
  "г. Санкт-Петербург, Комсомольская, 43 к1";
contact_divider.appendChild(contacts_section_text_5);

const contacts_section_text_6 = document.createElement("p");
contacts_section_text_6.classList.add("offiece_text_5");
contacts_section_text_6.textContent = "отдел продаж";
contact_divider.appendChild(contacts_section_text_6);

const contacts_section_text_7 = document.createElement("p");
contacts_section_text_7.classList.add("offiece_text_6");
contacts_section_text_7.textContent = "+7 800 789 89 89";
contact_divider.appendChild(contacts_section_text_7);

const contacts_section_text_3 = document.createElement("p");
contacts_section_text_3.classList.add("offiece_text_2");
contacts_section_text_3.textContent =
  "г. Санкт-Петербург, Комсомольская, 43 к1";
contact_divider.appendChild(contacts_section_text_3);

const contacts_section_img_2 = document.createElement("img");
contacts_section_img_2.classList.add("contacts_section_img_2");
contacts_section_img_2.src = "./public/VK.svg";
contacts_section_img_2.alt = "VK";
contact_divider.appendChild(contacts_section_img_2);

const contacts_section_img_3 = document.createElement("img");
contacts_section_img_3.classList.add("contacts_section_img_3");
contacts_section_img_3.src = "./public/Instagram_(1).svg";
contacts_section_img_3.alt = "Instagram";
contact_divider.appendChild(contacts_section_img_3);

const contacts_section_img_4 = document.createElement("img");
contacts_section_img_4.classList.add("contacts_section_img_4");
contacts_section_img_4.src = "./public/Rectangle_32.png";
contacts_section_img_4.alt = "Rectangle_32";
contacts_section.appendChild(contacts_section_img_4);

// --------------------section-8------------------

const any_questions_section = document.querySelector(".any_questions_section");

const any_questions_section_divider = document.createElement("div");
any_questions_section_divider.classList.add("any_questions_section_divider");
any_questions_section.appendChild(any_questions_section_divider);

const andy_questions_section_text = document.createElement("h2");
andy_questions_section_text.classList.add("any_questions_section_title_text");
andy_questions_section_text.textContent = "Есть вопросы?";
any_questions_section_divider.appendChild(andy_questions_section_text);

const any_questions_section_text = document.createElement("p");
any_questions_section_text.classList.add("any_questions_section_text");
any_questions_section_text.textContent =
  "Заполните форму и наш менеджер свяжется с вами";
any_questions_section_divider.appendChild(any_questions_section_text);

const any_questions_section_input = document.createElement("input");
any_questions_section_input.classList.add("any_questions_section_input");
any_questions_section_input.type = "text";
any_questions_section_input.placeholder = "Ваше имя";
any_questions_section_divider.appendChild(any_questions_section_input);

const any_questions_section_input_2 = document.createElement("input");
any_questions_section_input_2.classList.add("any_questions_section_input_2");
any_questions_section_input_2.type = "text";
any_questions_section_input_2.placeholder = "Номер телефона";
any_questions_section_divider.appendChild(any_questions_section_input_2);

const any_questions_section_button = document.createElement("button");
any_questions_section_button.classList.add("any_questions_section_button");
any_questions_section_button.type = "button";
any_questions_section_button.textContent = "Отправить";
any_questions_section_divider.appendChild(any_questions_section_button);

const any_questions_section_divider_img = document.createElement("div");
any_questions_section_divider_img.classList.add(
  "any_questions_section_divider_img"
);
any_questions_section.appendChild(any_questions_section_divider_img);

const any_questions_section_img = document.createElement("img");
any_questions_section_img.classList.add("any_questions_section_img");
any_questions_section_img.src = "./public/1024px-Instagram_logo 1.png";
any_questions_section_img.alt = "instagram";
any_questions_section_divider_img.appendChild(any_questions_section_img);

// ---------------grid----------------

const any_questions_section_div_grid = document.createElement("div");
any_questions_section_div_grid.classList.add("any_questions_section_div_grid");
any_questions_section.appendChild(any_questions_section_div_grid);

const any_questions_section_img_2 = document.createElement("img");
any_questions_section_img_2.classList.add("any_questions_section_img_2");
any_questions_section_img_2.src = "./public/gul.jpg";
any_questions_section_img_2.alt = "folwers";
any_questions_section_div_grid.appendChild(any_questions_section_img_2);

const any_questions_section_img_3 = document.createElement("img");
any_questions_section_img_3.classList.add("any_questions_section_img_3");
any_questions_section_img_3.src = "./public/fiseng.jpg";
any_questions_section_img_3.alt = "fireworks";
any_questions_section_div_grid.appendChild(any_questions_section_img_3);

const any_questions_section_img_4 = document.createElement("img");
any_questions_section_img_4.classList.add("any_questions_section_img_4");
any_questions_section_img_4.src = "./public/dog.jpg";
any_questions_section_img_4.alt = "dog";
any_questions_section_div_grid.appendChild(any_questions_section_img_4);

const any_questions_section_img_5 = document.createElement("img");
any_questions_section_img_5.classList.add("any_questions_section_img_5");
any_questions_section_img_5.src = "./public/menzere.jpg";
any_questions_section_img_5.alt = "landscape";
any_questions_section_div_grid.appendChild(any_questions_section_img_5);

const any_questions_section_img_6 = document.createElement("img");
any_questions_section_img_6.classList.add("any_questions_section_img_6");
any_questions_section_img_6.src = "./public/binalar.jpg";
any_questions_section_img_6.alt = "buildings";
any_questions_section_div_grid.appendChild(any_questions_section_img_6);

// ------------------footer------------------

const footer_section = document.querySelector(".footer_section");

const footer_section_text = document.createElement("p");
footer_section_text.classList.add("footer_section_text");
footer_section_text.textContent = "SneakMax";
footer_section.appendChild(footer_section_text);

const footer_section_dvider = document.createElement("div");
footer_section_dvider.classList.add("footer_section_dvider");
footer_section.appendChild(footer_section_dvider);

const footer_section_text_link = document.createElement("a");
footer_section_text_link.classList.add("footer_section_text_link");
footer_section_text_link.textContent = "Каталог";
footer_section_dvider.appendChild(footer_section_text_link);

const footer_section_text_link_2 = document.createElement("a");
footer_section_text_link_2.classList.add("footer_section_text_link_2");
footer_section_text_link_2.textContent = "О нас";
footer_section_dvider.appendChild(footer_section_text_link_2);

const footer_section_text_link_3 = document.createElement("a");
footer_section_text_link_3.classList.add("footer_section_text_link_3");
footer_section_text_link_3.textContent = "Подбор товара";
footer_section_dvider.appendChild(footer_section_text_link_3);

const footer_section_text_link_4 = document.createElement("a");
footer_section_text_link_4.classList.add("footer_section_text_link_4");
footer_section_text_link_4.textContent = "Наша команда";
footer_section_dvider.appendChild(footer_section_text_link_4);

const footer_section_text_link_5 = document.createElement("a");
footer_section_text_link_5.classList.add("footer_section_text_link_5");
footer_section_text_link_5.textContent = "Доставка и оплата";
footer_section_dvider.appendChild(footer_section_text_link_5);

const footer_section_text_link_6 = document.createElement("a");
footer_section_text_link_6.classList.add("footer_section_text_link_6");
footer_section_text_link_6.textContent = "Контакты";
footer_section_dvider.appendChild(footer_section_text_link_6);
