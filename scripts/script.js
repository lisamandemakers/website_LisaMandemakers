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
                    section.style.background = "linear-gradient(#FFF2A5, #F9D600)"; // Gradient voor geel
                } else if (idSelected === "green") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px limegreen, inset -30px 0 60px green, inset 60px 0 900px limegreen, inset -60px 0 900px green, 0 0 150px #fff, -30px 0 120px limegreen, 30px 0 120px green`;
                    orb.style.animation = "spin 3.2s linear infinite";
                    section.style.background = "linear-gradient(#A8D08D, #B9F2B1)"; // Gradient voor groen
                } else if (idSelected === "blue") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px cyan, inset -30px 0 60px blue, inset 60px 0 900px cyan, inset -60px 0 900px blue, 0 0 150px #fff, -30px 0 120px cyan, 30px 0 120px blue`;
                    orb.style.animation = "spin 2.8s linear infinite";
                    section.style.background = "linear-gradient(#6FA3D9, #A9D4FF)"; // Gradient voor blauw
                } else if (idSelected === "pink") {
                    orb.style.boxShadow = `inset 0 0 50px #fff, inset 60px 0 120px pink, inset -30px 0 60px hotpink, inset 60px 0 900px pink, inset -60px 0 900px hotpink, 0 0 150px #fff, -30px 0 120px pink, 30px 0 120px hotpink`;
                    orb.style.animation = "spin 3.5s linear infinite";
                    section.style.background = "linear-gradient(#F9A8D4, #FDC1E5)"; // Gradient voor roze
                }
            });
        });
    });

});

// chat GPT ^