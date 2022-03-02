const headerBurgerOpenBtn = document.querySelector('.header__burger-open')
const headerList = document.querySelector('.header__list')
const toggleBtn = document.querySelector('.theme__switch')
const theme = document.querySelector('.theme')


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






toggleBtn.addEventListener('click', () => {
  toggleButton(toggleBtn)
})
headerBurgerOpenBtn.addEventListener('click', toggleBurger)



