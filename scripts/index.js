const headerTop = document.getElementById('headerTop');
const getStartedBtn = document.getElementById('getStarted')

const scrollThreshold = 100

window.addEventListener('scroll', (e) => {

    if(window.scrollY >= scrollThreshold)
{  headerTop.style.position="fixed"
  headerTop.style.width='100%'
//   headerTop.style.height='50px'
  headerTop.style.zIndex = '1'
  headerTop.style.backgroundColor = 'white';
  getStartedBtn.style.backgroundColor= 'green'}
else {headerTop.style.backgroundColor = '#ffc017'
    getStartedBtn.style.backgroundColor = 'black'
}
});
