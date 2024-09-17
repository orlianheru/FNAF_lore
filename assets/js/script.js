document.addEventListener('DOMContentLoaded', function() {
    const blinkTexts = document.querySelectorAll('.blink');
    setInterval(() => {
        blinkTexts.forEach(blinkText => {
            blinkText.style.visibility = blinkText.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
    }, 500); 
});

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            id: 'FreddyImages',
            defaultSrc: '/assets/images/Freddy.png',
            hoverSrc: '/assets/images/freddy_creppy.png'
        },
        {
            id: 'BonnieImages',
            defaultSrc: '/assets/images/Bonnie.png',
            hoverSrc: '/assets/images/bonnie_creppy.png'
        },
        {
            id: 'ChicaImages',
            defaultSrc: '/assets/images/cika.png',
            hoverSrc: '/assets/images/Chica_creppy.png'
        },
        {
            id: 'FoxyImages',
            defaultSrc: '/assets/images/Foxy.png',
            hoverSrc: '/assets/images/foxy_creppy.png'
        }
    ];

    images.forEach(image => {
        const imgElement = document.getElementById(image.id);
        if (imgElement) {
            imgElement.addEventListener('mouseover', function() {
                imgElement.src = image.hoverSrc;
            });

            imgElement.addEventListener('mouseout', function() {
                imgElement.src = image.defaultSrc;
            });
        }
    });
});
