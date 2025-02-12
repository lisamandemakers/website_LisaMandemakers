function scrollToNextSection() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}


window.addEventListener("load", () => {

    const colorItems = document.querySelectorAll('.color-item');
    const orbs = document.querySelectorAll('.orb'); // Selecteer alle orbs
    const section = document.querySelector('section:nth-of-type(2)'); // Selecteer de specifieke sectie

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
                    section.style.background = "linear-gradient(#A198F5, #E7D4F8)"; // Gradient voor paars
                } else if (idSelected === "yellow") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px orange, inset -30px 0 60px yellow, inset 60px 0 900px orange, inset -60px 0 900px yellow, 0 0 150px #fff, -30px 0 120px orange, 30px 0 120px yellow`;
                    orb.style.animation = "spin 3s linear infinite";
                    section.style.background = "linear-gradient(#FFF2A5,rgb(255, 250, 216))"; // Gradient voor geel
                } else if (idSelected === "green") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px limegreen, inset -30px 0 60px green, inset 60px 0 900px limegreen, inset -60px 0 900px green, 0 0 150px #fff, -30px 0 120px limegreen, 30px 0 120px green`;
                    orb.style.animation = "spin 3.2s linear infinite";
                    section.style.background = "linear-gradient(#A8D08D,rgb(219, 250, 214))"; // Gradient voor groen
                } else if (idSelected === "blue") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px cyan, inset -30px 0 60px blue, inset 60px 0 900px cyan, inset -60px 0 900px blue, 0 0 150px #fff, -30px 0 120px cyan, 30px 0 120px blue`;
                    orb.style.animation = "spin 2.8s linear infinite";
                    section.style.background = "linear-gradient(#6FA3D9,rgb(203, 226, 250))"; // Gradient voor blauw
                } else if (idSelected === "pink") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px pink, inset -30px 0 60px hotpink, inset 60px 0 900px pink, inset -60px 0 900px hotpink, 0 0 150px #fff, -30px 0 120px pink, 30px 0 120px hotpink`;
                    orb.style.animation = "spin 3.5s linear infinite";
                    section.style.background = "linear-gradient(#F9A8D4,rgb(252, 223, 240))"; // Gradient voor roze
                }
            });
        });
    });

});

// chat GPT ^

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/212';

// Combineer de base URL en endpoint om de volledige URL te maken
const myURL = baseURL + endpointMe;

// Gebruik fetch om data op te halen
fetch(myURL)
  .then(response => {
    // Controleer of de response succesvol is
    if (!response.ok) {
      throw new Error('Netwerk antwoord was niet ok');
    }
    return response.json(); // Converteer de response naar JSON
  })
  .then(data212 => {
    // Haal het h1-element uit de HTML
    let deH1 = document.querySelector("h1");

    // Haal de naam uit de data
    let myName = data212.data.name;

    // Split de naam in woorden
    let nameParts = myName.split(" ");

    // Maak een br element aan voor de lijn breuk
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
  })
  .catch(error => {
    // Foutafhandeling voor eventuele problemen
    console.error('Er is een fout opgetreden:', error);
  });




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
  