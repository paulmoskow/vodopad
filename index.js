const cardsButton = document.querySelectorAll('.main__card');
const popup = document.querySelector('.popup');
const popupButton = document.querySelector('.popup__button');
const popupText = document.querySelector('.popup__text');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');

//set array to keep data for dynamic render
const cardData = [
  {
    id: 'green',
    title: 'Озеленение',
    image: './images/05green.jpg',
    text: 'Выбор и приобретение саженцев, которые хорошо приживутся в вашем климате, высадка деревьев и кустарников, посадка многолетних растений, создание клумб и цветников, а также укладка рулонного газона на подготовленную почву.'
  },
  {
    id: 'water',
    title: 'Автополив',
    image: './images/04water.jpg',
    text: 'Система автоматического полива  позволяет добиться оптимального и равномерного орошения. Это позволяет не только улучшить эстетичный внешний вид сада, но и снизить расходы на воду и услуги по уходу за садом, а также повысить урожайность. Автополив состоит из сети трубопроводов, оросителей, капельных линий, клапанов, проводки, контроллера и разнообразных дополнительных устройств, таких как датчики дождя или водяные розетки.'
  },
  {
    id: 'project',
    title: 'Проектирование',
    image: './images/05landscape.jpg',
    text: 'Перед тем, как начать работу над проектом, проводится тщательное исследование участка. Необходимо определить его особенности, такие как рельеф, тип почвы, уровень грунтовых вод, климатические условия и ориентацию по сторонам света. Это поможет  выбрать наиболее подходящие материалы и решения для создания гармоничного ландшафта.'
  },
  {
    id: 'green_en',
    title: 'Landscaping Projects',
    image: './images/05green.jpg',
    text: 'Selection and acquisition of seedlings that will thrive in your climate, planting of trees and shrubs, planting of perennial plants, creating flower beds and gardens, and laying rolled turf on prepared soil.'
  },
  {
    id: 'water_en',
    title: 'Irrigation Systems',
    image: './images/04water.jpg',
    text: 'The automatic irrigation system ensures optimal and even watering. This not only enhances the aesthetic appearance of the garden but also reduces water and garden maintenance costs, and increases crop yields. The system consists of a network of pipes, sprinklers, drip lines, valves, wiring, a controller, and various additional devices such as rain sensors or water sockets.'
  },
  {
    id: 'project_en',
    title: 'Landscape Designs',
    image: './images/05landscape.jpg',
    text: 'Before starting work on the project, a thorough site survey is conducted. It is necessary to determine its characteristics, such as terrain, soil type, groundwater level, climatic conditions, and orientation to the cardinal directions. This will help in selecting the most suitable materials and solutions for creating a harmonious landscape.'
  },
  {
    id: 'green_cg',
    title: 'Projekti ozelenjavanja',
    image: './images/05green.jpg',
    text: 'Izbor i nabavka sadnica koje će se dobro prilagoditi vašoj klimi, sadnja drveća i žbunja, sadnja višegodišnjih biljaka, kreiranje leja i cvetnih vrtova, kao i postavljanje travnjaka na pripremljeno tlo.'
  },
  {
    id: 'water_cg',
    title: 'Sistemi za navodnjavanje',
    image: './images/04water.jpg',
    text: 'Sistem automatskog zalivanja omogućava postizanje optimalnog i ravnomernog navodnjavanja. To ne samo da poboljšava estetski izgled vrta, već i smanjuje troškove vode i usluga održavanja vrta, kao i povećava prinos. Automatski sistem zalivanja se sastoji od mreže cevi, prskalica, kapajućih linija, ventila, ožičenja, kontrolera i raznih dodatnih uređaja, kao što su senzori za kišu ili vodene utičnice.'
  },
  {
    id: 'project_cg',
    title: 'Pejzažni projekti',
    image: './images/05landscape.jpg',
    text: 'Pre nego što se započne rad na projektu, sprovodi se detaljno istraživanje terena. Potrebno je utvrditi njegove karakteristike, kao što su reljef, tip zemljišta, nivo podzemnih voda, klimatski uslovi i orijentacija prema stranama sveta. Ovo će pomoći u odabiru najprikladnijih materijala i rešenja za stvaranje harmoničnog pejzaža.'
  }
];

//set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

//close popups by Esc 
function openPopup() {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

//set data in popups dynamicly 
cardsButton.forEach((button) => {
  button.addEventListener('click', () => {
    const card = cardData.find(card => card.id === button.id);
    if (card) {
      popupTitle.textContent = card.title;
      popupText.textContent = card.text;
      popupImage.src = card.image;
      openPopup();     
    }
  });
});

popup.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup_opened') 
  || evt.target.classList.contains('popup__button')) {
    closePopup();
  }
});

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

