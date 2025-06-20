
// -- BRON:chat gpt
// Functie voor de scroll naar beneden knop
function scrollToNextSection() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}



// -- BRON: Video color picker:https://www.youtube.com/watch?v=m-z3xQL9rzU&list=PLFPAxDD3icirSnt2ZE9LdSWnnj1oqsmN-&index=3
// COLOR PICKER VOOR DE ORBS & SECTION 2
window.addEventListener("load", () => {

    const colorItems = document.querySelectorAll('.color-item');
    const orbs = document.querySelectorAll('.orb'); // Selecteer alle orbs
    const section = document.querySelector('.text-section');
    const sectionBottom = document.querySelector('.text-section-bottom'); // Selecteer de specifieke sectie

    colorItems.forEach(item => {
        item.addEventListener('click', function() {
            const idSelected = this.id; // Krijg de geselecteerde kleur

            // Verwijder de 'active' class van alle buttons
            colorItems.forEach(btn => btn.classList.remove('active'));
            
            // Voeg de 'active' class toe aan de aangeklikte button
            this.classList.add('active');

            // Voeg de box-shadow en animatie toe voor elke kleur
            orbs.forEach(orb => {
                if (idSelected === "purple") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px violet, inset -30px 0 60px blue, inset 60px 0 900px violet, inset -60px 0 900px blue, 0 0 150px #fff, -30px 0 120px violet, 30px 0 120px blue`;
                    orb.style.animation = "spin 3s linear infinite";
                    section.style.background = "linear-gradient(#A198F5, #E7D4F8)";
                    sectionBottom.style.background = "linear-gradient(#A198F5, #E7D4F8)"; // Gradient voor paars
                } else if (idSelected === "yellow") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px orange, inset -30px 0 60px yellow, inset 60px 0 900px orange, inset -60px 0 900px yellow, 0 0 150px #fff, -30px 0 120px orange, 30px 0 120px yellow`;
                    orb.style.animation = "spin 3s linear infinite";
                    section.style.background = "linear-gradient(#FFF2A5,rgb(255, 250, 216))";
                    sectionBottom.style.background = "linear-gradient(#FFF2A5,rgb(255, 250, 216))"; // Gradient voor geel
                } else if (idSelected === "green") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px limegreen, inset -30px 0 60px green, inset 60px 0 900px limegreen, inset -60px 0 900px green, 0 0 150px #fff, -30px 0 120px limegreen, 30px 0 120px green`;
                    orb.style.animation = "spin 3.2s linear infinite";
                    section.style.background = "linear-gradient(#A8D08D,rgb(219, 250, 214))";
                    sectionBottom.style.background = "linear-gradient(#A8D08D,rgb(219, 250, 214))"; // Gradient voor groen
                } else if (idSelected === "blue") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px cyan, inset -30px 0 60px blue, inset 60px 0 900px cyan, inset -60px 0 900px blue, 0 0 150px #fff, -30px 0 120px cyan, 30px 0 120px blue`;
                    orb.style.animation = "spin 2.8s linear infinite";
                    section.style.background = "linear-gradient(#6FA3D9,rgb(203, 226, 250))";
                    sectionBottom.style.background = "linear-gradient(#6FA3D9,rgb(203, 226, 250))"; // Gradient voor blauw
                } else if (idSelected === "pink") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px pink, inset -30px 0 60px hotpink, inset 60px 0 900px pink, inset -60px 0 900px hotpink, 0 0 150px #fff, -30px 0 120px pink, 30px 0 120px hotpink`;
                    orb.style.animation = "spin 3.5s linear infinite";
                    section.style.background = "linear-gradient(#F9A8D4,rgb(252, 223, 240))"; 
                    sectionBottom.style.background = "linear-gradient(#F9A8D4,rgb(252, 223, 240))";
                }
            });
        });
    });

});




// -- BRON: chat GPT
// -- BRON: workshop: API'S voor beginners
const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/212';

// Combineer de base URL en endpoint om de volledige URL te maken
const myURL = baseURL + endpointMe;


// ASYNCHRONE FUNCTIE VOOR HET OPHALEN VAN DATA UIT DE API 
async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}

// MIJN NAAM UIT DE API
getData(myURL)
  .then(data212 => {
    // Haal het h1-element uit de HTML
    let deH1 = document.querySelector("h1");

    // Haal de naam uit de data
    let myName = data212.data.name;

    // Split de naam in woorden
    let nameParts = myName.split(" ");

    // Maak een br element aan voor de lijnbreuk
    let brElement = document.createElement('br');

    // Maak een span element aan voor het tweede woord
    if (nameParts.length > 1) {
      let spanElement = document.createElement('span');
      spanElement.textContent = nameParts[1]; // Het tweede woord in de span

      // Voeg de naam toe in het gewenste formaat
      let firstWord = nameParts[0]; // Het eerste woord
      let restOfName = nameParts.slice(2).join(" "); // De rest van de naam

      // Stel de inhoud van de h1 in
      deH1.innerHTML = firstWord;  // Voeg het eerste woord toe
      deH1.appendChild(brElement); // Voeg de line break toe
      deH1.appendChild(spanElement); // Voeg de span toe met het tweede woord
      deH1.innerHTML += ' ' + restOfName; // Voeg de rest van de naam toe
    } else {
      // Als er geen tweede woord is, voeg gewoon de naam toe
      deH1.textContent = myName;
    }

    // Controleer de naam in de console
    console.log(myName);
  });


  // MIJN BIO UIT DE API
  getData(myURL)
  .then(data212 => {
    let deEersteP =  document.querySelector("p");
    let myBio = data212.data.bio;
    deEersteP.textContent =  myBio;
  });


 // MEER OVER MIJ > CUSTOM FIELD JSON
  getData(myURL)
  .then(data212 => {
    // Parse de custom string
    let JsonCustom = JSON.parse(data212.data.custom);
    let woonplaats = JsonCustom.woonplaats;
    let vijfdeH3 = document.querySelectorAll("article h3")[4]; 
    vijfdeH3.innerHTML = woonplaats; 

    let sport = JsonCustom.sport;
    let eersteH3 = document.querySelectorAll("article h3")[0]; 
    eersteH3.innerHTML = sport; 

    let hobby = JsonCustom.hobby;
    let tweedeH3 = document.querySelectorAll("article h3")[1]; 
    tweedeH3.innerHTML = hobby; 

    let interesse = JsonCustom.interesse;
    let derdeH3 = document.querySelectorAll("article h3")[2]; 
    derdeH3.innerHTML = interesse; 

    let gekOp = JsonCustom.gekop;
    let vierdeH3 = document.querySelectorAll("article h3")[3]; 
    vierdeH3.innerHTML = gekOp; 
});

 

// LEERDOELEN MEER UITLEG KNOPPEN
// -- BRON: chat gpt en Kim mijn klas genoot
  const readMoreButtons = document.querySelectorAll('.read-more');
  const closeButtons = document.querySelectorAll('.close-dialog');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dialog = button.nextElementSibling;  // Dialog is next to the button
      dialog.showModal();  // Open the dialog
    });
  });
  
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');  // Find the closest dialog to the close button
      dialog.close();  // Close the dialog
    });
  });
  



// 

// === CAROUSEL ===
// === CAROUSEL ===
const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;
const cardsToShow = 4;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  const maxIndex = totalCards - cardsToShow;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

// Zorg dat alles opnieuw wordt berekend bij resize
window.addEventListener('resize', updateCarousel);

// === FAQ switch bij klikken op carousel ===
const faqSections = document.querySelectorAll('.faq-section');
const carouselCards = document.querySelectorAll('.carousel-card');

// Zet de eerste kaart en FAQ sectie standaard actief bij laden
if (carouselCards.length > 0) {
  carouselCards[0].classList.add('active');
}
if (faqSections.length > 0) {
  faqSections[0].classList.add('active');
}

carouselCards.forEach((card, index) => {
  card.addEventListener('click', (e) => {
    // Verwijder actieve klasse van alle kaarten
    carouselCards.forEach(c => c.classList.remove('active'));
    // Voeg actieve klasse toe aan de aangeklikte kaart
    card.classList.add('active');

    // Confetti effect op klikpositie
    spawnConfetti(e.clientX, e.clientY);

    // FAQ-secties wisselen
    faqSections.forEach(section => {
      section.classList.remove('active');
    });

    const sectionToShow = document.querySelector(`.faq-section[data-faq="${index + 1}"]`);
    if (sectionToShow) {
      sectionToShow.classList.add('active');
    }
  });
});

function spawnConfetti(x, y, count = 12) {
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.classList.add('confetti-dot');

    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 40;

    const xOffset = Math.cos(angle) * distance;
    const yOffset = Math.sin(angle) * distance;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.setProperty('--x', `${xOffset}px`);
    dot.style.setProperty('--y', `${yOffset}px`);

    document.body.appendChild(dot);

    // Verwijder dot na animatie
    setTimeout(() => {
      dot.remove();
    }, 800);
  }
}




// Smooth black cursor
// Maak cursor-div en tekst-span aan
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');

const cursorText = document.createElement('span');
cursorText.textContent = 'View me';
cursorDot.appendChild(cursorText);

document.body.appendChild(cursorDot);

// Coördinaten volgen
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animatielus voor smooth beweging
function animateCursor() {
  const currentX = parseFloat(cursorDot.style.left) || 0;
  const currentY = parseFloat(cursorDot.style.top) || 0;

  const newX = currentX + (mouseX - currentX) * 0.2;
  const newY = currentY + (mouseY - currentY) * 0.2;

  cursorDot.style.left = `${newX}px`;
  cursorDot.style.top = `${newY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover op specifieke elementen
const hoverTargets = document.querySelectorAll('.carousel-card');

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursorDot.classList.remove('hovering');
  });
});


















// gsap.registerPlugin(ScrollTrigger);
// const contents = gsap.utils.toArray("#scrollContainer .content");
// const scrollImages = document.querySelector(".scroll-items");
// const textItems = document.querySelector(".textItems");

// // Scroll animatie voor de content-secties
// gsap.to(contents, {
//   xPercent: -100 * (contents.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#scrollContainer",
//     pin: true,
//     scrub: 0.5,
//     snap: {
//       snapTo: gsap.utils.snap(1 / (contents.length - 1)), // snap per sectie
//       duration: 0.15,
//       ease: "power1.inOut"
//     }
//   }
// });

// // scroll de voorste foto's horizontaal
// gsap.to(scrollImages, {
//   x: 0,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#scrollContainer",
//     start: "top top",
//     end: "bottom -0%",
//     scrub: true,
//   }
// });

// // scroll de tekst
// gsap.to(textItems, {
//     y: -480,
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#scrollContainer",
//       start: "top top",
//       end: "bottom -0%",
//       scrub: true,
//     }
//   });

// ScrollTrigger.create({
//     trigger: "#scrollContainer",
//     start: "top 25%",
//     end: "bottom -10%",
//     onEnter: () => gsap.to("#imgScrollContainer", {opacity: 1, height: 500, duration: 0.3}),
//     onLeave: () => gsap.to("#imgScrollContainer", {opacity: 0, height: 0, duration: 0.3}),
//     onEnterBack: () => gsap.to("#imgScrollContainer", {opacity: 1, height: 500, duration: 0.3}),
//     onLeaveBack: () => gsap.to("#imgScrollContainer", {opacity: 0, height: 0, duration: 0.3}),
//   });


//   ScrollTrigger.create({
//     trigger: "#scrollContainer",
//     start: "top 25%",
//     end: "bottom -10%",
//     onEnter: () => gsap.to("#textScrollContainer", {opacity: 1, duration: 0.3}),
//     onLeave: () => gsap.to("#textScrollContainer", {opacity: 0, duration: 0.3}),
//     onEnterBack: () => gsap.to("#textScrollContainer", {opacity: 1, duration: 0.3}),
//     onLeaveBack: () => gsap.to("#textScrollContainer", {opacity: 0, duration: 0.3}),
//   });



const colorThemes = {
  purple: {
    primary: '#A198F5',
    light: '#E7D4F8'
  },
  pink: {
    primary: '#F9A8D4',
    light: 'rgb(252, 223, 240)'
  },
  blue: {
    primary: '#6FA3D9',
    light: 'rgb(203, 226, 250)'
  },
  green: {
    primary: '#A8D08D',
    light: 'rgb(219, 250, 214)'
  },
  yellow: {
    primary: '#FFF2A5',
    light: 'rgb(255, 250, 216)'
  }
};

  document.querySelectorAll('.color-item').forEach(item => {
    item.addEventListener('click', () => {
      const color = item.id;
      const theme = colorThemes[color];

      if (theme) {
        document.documentElement.style.setProperty('--color-primary', theme.primary);
        document.documentElement.style.setProperty('--color-light-purple', theme.light);
      }
    });
  });

