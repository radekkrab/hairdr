// Механизм скрытого меню
var buttonBurger = document.getElementById('nav__burger');

buttonBurger.addEventListener("click", () =>
    window.screen.width > 576 ?
        document.getElementById("mySidenav").style.cssText += `
            width: 430px;
            padding: 39px 26px 0 39px;
            box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);
            };`
        :
        document.getElementById("mySidenav").style.cssText += `
                width: 100%;
                padding: 39px 0 0 0;
                box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);};`);

document.getElementById('closebtn').addEventListener("click", () => document.getElementById("mySidenav").style.cssText += `
    width: 0px;
    padding: 0;
    box-shadow: none;};`);

// Механизм медленной прокрутки
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// модалки для картинок

const item = document.querySelector('.services__flex');

item.addEventListener('click', (event) => {
    if(event.target.tagName === 'IMG') {
        let Element = event.target.outerHTML;
        serviceModal.innerHTML = Element + "<div id=closeModal>&times;</div>";
        serviceModal.showModal();
        serviceModal.addEventListener('click', (event)=> {if(event.target.tagName !== 'IMG')  serviceModal.close();})
    } 
  }) 