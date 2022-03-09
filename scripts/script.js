const headerBurgerOpenBtn = document.querySelector('.header__burger-open')
const headerList = document.querySelector('.header__list')
const toggleBtn = document.querySelectorAll('.theme__switch')
const theme = document.querySelector('.theme')

const arrowLeft = document.querySelector('.types__slider-buttons-left')
const arrowRight = document.querySelector('.types__slider-buttons-right')
const itemSlider = document.querySelectorAll('.types__slider-item')
let index = 0

const navigationItem = document.querySelectorAll('.tabs__navigation-item')
const contentItem = document.querySelectorAll('.tabs__content-item')

const select = document.querySelector('.tabs__select')
const option = document.querySelectorAll('.tabs__option')
select.addEventListener('change', () => {
  const slHighway = document.querySelector('.tabs__slider-highway')
  const slGravel = document.querySelector('.tabs__slider-grevel')
  const slTt = document.querySelector('.tabs__slider-tt')

  select.value === "highway" ? slHighway.classList.add('tabs__box-slider-item_active') : slHighway.classList.remove('tabs__box-slider-item_active')
  select.value === "gravel" ? slGravel.classList.add('tabs__box-slider-item_active') : slGravel.classList.remove('tabs__box-slider-item_active')
  select.value === "tt" ? slTt.classList.add('tabs__box-slider-item_active') : slTt.classList.remove('tabs__box-slider-item_active')
})

const linkPointGravel = document.querySelectorAll('.tabs__link-point-gravel')
const tabsGravelSlider = document.querySelectorAll('.tabs__gravel-slider')
linkPointGravel.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let attrLinkFravel = e.target.getAttribute('data-gravel')
    for (let i = 0; i < tabsGravelSlider.length; i++) {
      let attrSlGravel = tabsGravelSlider[i].getAttribute('data-slgravel')
      if (attrLinkFravel === attrSlGravel) {
        tabsGravelSlider[i].classList.add('tabs__gravel-slider_active')
      } else {
        tabsGravelSlider[i].classList.remove('tabs__gravel-slider_active')
      }
    }
  })
})

const linkPointTt = document.querySelectorAll('.tabs__link-point-tt')
const tabsTtSlider = document.querySelectorAll('.tabs__tt-slider')
console.log(tabsTtSlider);
linkPointTt.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let attrLinkTt = e.target.getAttribute('data-tt')
    for (let i = 0; i < tabsTtSlider.length; i++) {
      let attrSlTt = tabsTtSlider[i].getAttribute('data-sltt')
      if (attrLinkTt === attrSlTt) {
        tabsTtSlider[i].classList.add('tabs__tt-slider_active')
      } else {
        tabsTtSlider[i].classList.remove('tabs__tt-slider_active')
      }
    }
  })
})

const linkPointHighway = document.querySelectorAll('.tabs__link-point-highway')
const tabsBoxSlider = document.querySelectorAll('.tabs__highway-slider')
linkPointHighway.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let attrLinkHighWay = e.target.getAttribute('data-highway')
    for (let i = 0; i < tabsBoxSlider.length; i++) {
      let attrSlHighway = tabsBoxSlider[i].getAttribute('data-slhigway')
      if (attrLinkHighWay === attrSlHighway) {
        tabsBoxSlider[i].classList.add('tabs__highway-slider_active')
      } else {
        tabsBoxSlider[i].classList.remove('tabs__highway-slider_active')
      }
    }
  })
})


const tabsLinkPoint = document.querySelectorAll('.tabs__link-point')
tabsLinkPoint.forEach(item => {
  item.addEventListener('click', (e) => {
    for (j = 0; j < tabsLinkPoint.length; j++) {
      tabsLinkPoint[j].classList.remove('tabs__link-point_active')
    }
    e.target.classList.add('tabs__link-point_active')
  })
})


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

function toggleButton(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.toggle('theme__switch_on')
  }
}

toggleBtn.forEach(item => {
  item.addEventListener('click', () => {
    toggleButton(toggleBtn)
  })
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


