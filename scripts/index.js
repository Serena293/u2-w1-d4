const headerTop = document.getElementById('headerTop');
const getStartedBtn = document.getElementById('getStarted');
const lettersM = document.getElementsByTagName('g');

const scrollThreshold = 100;

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= scrollThreshold) {
        headerTop.style.position = "fixed";
        headerTop.style.width = '100%';
        headerTop.style.zIndex = '1';
        headerTop.style.backgroundColor = 'white';
        getStartedBtn.style.backgroundColor = 'green';
    } else {
        headerTop.style.backgroundColor = '#ffc017';
        getStartedBtn.style.backgroundColor = 'black';
    }
});

const animation = () => {
   
    const indices = Array.from({ length: lettersM.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]]; 
    }

    let index = 0;

    const intervalId = setInterval(() => {
      
        if (index > 0) {
            lettersM[indices[index - 1]].classList.remove('fade');
        }

       
        lettersM[indices[index]].classList.add('fade');

        index++;

        if (index >= indices.length) {
            index = 0;
        }
    }, 10); 
};

animation();
