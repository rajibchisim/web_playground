let btShowMenu = document.getElementById('bt-show-menu');
let btHideMenu = document.getElementById('bt-hide-menu');

btShowMenu.addEventListener('click', (e) => {
    document.getElementById('mobile-nav').style.display = 'block';
})
btHideMenu.addEventListener('click', (e) => {
    document.getElementById('mobile-nav').style.display = 'none';
})