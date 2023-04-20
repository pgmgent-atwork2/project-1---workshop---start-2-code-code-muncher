window.onload = function () {
    const otherElements = document.querySelectorAll('.el');

    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');

    function playSound(type) {
        audioSource.setAttribute('src', `../public/assets/sound/${type}.m4a`);
        audio.currentTime = 0; // start the sound from the beginning
        audio.load();
        audio.play(); // play the sound
        console.log(type)
    }


    // selecteer de elementen die we nodig hebben



    const progressBar = document.getElementById("myBar");

    // zet de breedte van de progress bar op 0%
    progressBar.style.width = "0%";

    function increaseProgressBar() {
        const currentWidth = parseInt(progressBar.style.width, 10);
        progressBar.style.width = currentWidth + 10 + "%";
    }


    //Deze code zorgt voor interactie tussen het bewegende div-element en andere elementen op de pagina met een dataset attribuut "item".
    const moveDiv = document.getElementById("movingDiv");
    moveDiv.style.top = '1rem';
    moveDiv.style.left = '0rem';
    // Eerst wordt het bewegende div-element geselecteerd en de beginpositie wordt ingesteld op de bovenkant van het scherm. 

    window.onkeydown = function (e) {
        e.preventDefault();
        if (!e) {
            e = window.event;
        }
        let keyCode;
        let speed = 100;
        if (e.which) {
            keyCode = e.which;
        } else {
            keyCode = e.keyCode;
        }

        if (keyCode === 37) {
            moveDiv.style.left = (parseInt(moveDiv.style.left, 10) - speed) + 'px';
        } else if (keyCode === 38) {
            moveDiv.style.top = (parseInt(moveDiv.style.top, 10) - speed) + 'px';
        } else if (keyCode === 39) {
            console.log('left')
            moveDiv.style.left = (parseInt(moveDiv.style.left, 10) + speed) + 'px';
        } else if (keyCode === 40) {
            moveDiv.style.top = (parseInt(moveDiv.style.top, 10) + speed) + 'px';
        }

        // Vervolgens wordt er een eventlistener toegevoegd aan het venster die reageert op de toetsen van het toetsenbord. Wanneer er een toets wordt ingedrukt en losgelaten, wordt de functie uitgevoerd die de positie van het bewegende div-element aanpast op basis van de toetsen die zijn ingedrukt.
        // de elk nummer staat voor een toetsbord nummer 

        console.log(4);
        otherElements.forEach(function (element) {
            const moveRect = moveDiv.getBoundingClientRect();
            const elRect = element.getBoundingClientRect();
            if (moveRect.left < elRect.right && moveRect.right > elRect.left && moveRect.top < elRect.bottom && moveRect.bottom > elRect.top && element.dataset.item) {
                const type = element.dataset.item;
                alert(type);
                playSound(type);
                increaseProgressBar(type);
            }
        });

        // Dit is een forEach-loop die over elk element in de otherElements array loopt. 
        // Voor elk element worden de rechthoeken van de moveDiv en het element vergeleken om te controleren of ze elkaar overlappen dit wordt gecontroleerd door getBoundingClientRect() .
        // Als de elementen elkaar overlappen en als het element een dataset item heeft, dan wordt het type van het element opgeslagen in een variabele en wordt playSound() en increaseProgressBar() functies aangeroepen met type als argument.



    };
};

