let mobileMenuElem = document.querySelector('.mobile-menu')
let mobileLinksElem = document.querySelector('.mobile__links')
let mobileMenuOpen = false;
mobileMenuElem.addEventListener('click',function() {
    if (mobileMenuOpen) {
        mobileMenuElem.classList.remove('mobile-menu--open')
        mobileLinksElem.style.transform = 'translateX(-25rem)'
        mobileMenuOpen = false;
    } else {
        mobileMenuElem.classList.add('mobile-menu--open')
        mobileLinksElem.style.transform = 'translateX(0rem)'
        mobileMenuOpen = true;
    }
})