window.onload = function () {
    const otherElements = document.querySelectorAll('.el');

    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');

    function playSound(type) {
        audioSource.setAttribute('src', `../../assets/sound/${type}.m4a`);
        audio.currentTime = 0; // start the sound from the beginning
        audio.play(); // play the sound
    }

    // selecteer de elementen die we nodig hebben

    const progressBar = document.getElementById("myBar");

    // zet de breedte van de progress bar op 0%
    progressBar.style.width = "0%";

    // update de breedte van de progress bar met de gegeven percentage
    function updateProgress(percentage) {
        progressBar.style.width = percentage + "%";
    }

    // test de progress bar door deze in stapjes van 10% te updaten
    let percentage = 0;
    setInterval(() => {
        percentage += 10;
        updateProgress(percentage);
    }, 1000);


    const moveDiv = document.getElementById("movingDiv");
    moveDiv.style.top = '1rem';
    moveDiv.style.left = '0rem';
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

        console.log(4);
        otherElements.forEach(function (element) {
            const moveRect = moveDiv.getBoundingClientRect();
            const elRect = element.getBoundingClientRect();
            // console.log(moveRect, elRect);
            if (moveRect.left < elRect.right && moveRect.right > elRect.left && moveRect.top < elRect.bottom && moveRect.bottom > elRect.top) {
                const type = element.dataset.item;
                alert(type);
                playSound(type);




                // console.log(element.className);
            }
        });
    };
};

