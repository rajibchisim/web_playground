let paralaxBg = document.querySelector('.paralax-hero');

paralaxBg.style.backgroundPositionY = 0;
paralaxBg.style.backgroundPositionX = "50%";
window.addEventListener('scroll', (e) => {
    paralaxBg.style.backgroundPositionY = '-' + window.scrollY * .5 + 'px';
})