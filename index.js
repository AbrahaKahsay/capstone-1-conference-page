const speakerSection = document.querySelector('.main-speaker-section');
let counter = 0;
// create an array of objects to store the cards
const data = [
  {
    //  first card
    image: 'images/speaker_01.png',
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Entreprenurial Legal Studies of Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',

  },
  {
    // second card
    image: 'images/speaker_02.png',
    name: 'Kilnam Chon',
    position: '',
    description: 'Bilham Chon helped bring the internet to Asia and is an outspoken advocate for the poen web and digital commons.In 2012, he was inducted intothe inagural class of the internet Society(ISOC) internet hall of fame',
  },
  {
    // third card
    image: 'images/speaker_03.png',
    name: 'SohYeong Noh',
    position: 'Director of Art Center Nabi and a boared member of CC korea',
    description: 'As the venue for new media art production in Korea, Nabi promotes cross-displinary collaboration and understanding among science, technology, humanities, and the arts',

  },
  {
    // fourth card
    image: 'images/speaker_04.png',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description: 'European ingetration, politicaal democracy and participation of youth through online as her major condem, Reda report outlining potential changes to EU copy right law was approved by the parlament in July.',
  },
  {
    // fifth card
    image: 'images/speaker_05.png',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is Executive Director of the Wikimedia Foundation, the non-profit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',
  },
  {
    // six card
    image: 'images/speaker_06.png',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source',
  },
];

// looping through speakerSection to put the cards

data.forEach((speakers) => {
  const {
    name, description, position,
  } = speakers;

  const cardHTML = `<div class="cards-wrap">
  <div class="card" id="card${counter + 1}">
    <div class="card-image">
      <img
        class="image"
        src="images/speaker_0${counter + 1}.png"
        alt="Porfolio-image1"
      />
    </div>
    <div class="personal-info">
      
        <h3 class="name">${name}</h3>
        <p class="position">${position}</p>
        <p class="description">${description}</p>
     
    </div>
   </div>
  </div>
      `;
  speakerSection.insertAdjacentHTML('beforeend', cardHTML);
  counter += 1;
});

// mobile menu
// functions for changing the navbar or dropdown menu's style

function openNav() {
  document.getElementById('navBar').style.width = '100%';
}

function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}

// add event listner to open and close buttons.

document.getElementById('hum').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.dt-nav-li').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('navBar').style.width = '0%';
}));