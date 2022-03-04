const headerBurgerOpenBtn = document.querySelector('.header__burger-open')
const headerList = document.querySelector('.header__list')
const toggleBtn = document.querySelector('.theme__switch')
const theme = document.querySelector('.theme')

const arrowLeft = document.querySelector('.types__slider-buttons-left')
const arrowRight = document.querySelector('.types__slider-buttons-right')
const itemSlider = document.querySelectorAll('.types__slider-item')
let index = 0

const navigationItem = document.querySelectorAll('.tabs__navigation-item')
const contentItem = document.querySelectorAll('.tabs__content-item')

function toggleBurger() {
  headerList.classList.toggle('header__list_active')
  if (headerList.classList.contains('header__list_active')) {
    theme.style.display = 'flex'
    headerBurgerOpenBtn.style.backgroundImage = "url(./images/button_close.svg)"
  } else {
    headerBurgerOpenBtn.style.backgroundImage = "url(./images/burger_line_list_menu_nav_navigation_option_icon_123231.svg)"
    theme.style.display = 'none'
  }
}

function toggleButton(item) {
  item.classList.toggle('theme__switch_on')
}

function sliderRight() {
  index++
  if (index < itemSlider.length) {
    itemSlider[index - 1].classList.remove('types__slider-item_active')
    itemSlider[index].classList.add('types__slider-item_active')
  } else {
    itemSlider[index - 1].classList.remove('types__slider-item_active')
    index = 0
    itemSlider[index].classList.add('types__slider-item_active')
  }
}

function sliderLeft() {
  index--
  console.log(index)
  if (index >= 0) {
    itemSlider[index + 1].classList.remove('types__slider-item_active')
    itemSlider[index].classList.add('types__slider-item_active')
  } else {
    index = itemSlider.length - 1
    itemSlider[index].classList.add('types__slider-item_active')
    itemSlider[0].classList.remove('types__slider-item_active')
  }
}


toggleBtn.addEventListener('click', () => {
  toggleButton(toggleBtn)
})
headerBurgerOpenBtn.addEventListener('click', toggleBurger)
arrowRight.addEventListener('click', sliderRight)
arrowLeft.addEventListener('click', sliderLeft)

for (let i = 0; i < navigationItem.length; i++) {
  navigationItem[i].addEventListener('click', (e) => {
    e.preventDefault
    let attrNav = e.target.getAttribute('data-itemtab')
    for (let j = 0; j < contentItem.length; j++) {
      let attrCont = contentItem[j].getAttribute('data-infotab')
      if (attrNav === attrCont) {
        contentItem[j].classList.add('tabs__content-item_active')
        navigationItem[j].classList.add('tabs__navigation-item_active')
      } else {
        contentItem[j].classList.remove('tabs__content-item_active')
        navigationItem[j].classList.remove('tabs__navigation-item_active')
      }
    }
  })
}


