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
    text: 'Выбор и приобретение саженцев, которые хорошо приживутся в вашем климате, высадка деревьев и кустарников, посадка многолетних растений, создание клумб и цветников, а также укладка рулонного газона на подготовленную почву. Обслуживание участков включает сезонные работы по стрижке, обработке и подкормке удобрениями.'
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

