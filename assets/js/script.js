const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
  preloader.classList.add('remove')
})

const navbarTogglers = document.querySelectorAll('[data-navbar-toggler]')
const navbar = document.querySelector('[data-navbar]')
const overlay = document.querySelector('[data-overlay]')

const toggleNavbar = () => {
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
}

navbarTogglers.forEach((navbarToggler) => {
  navbarToggler.addEventListener('click', toggleNavbar)
})

//header
const scroll = document.querySelector('[data-scroll-top]')
const header = document.querySelector('[data-header]')
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active')
    scroll.classList.add('active')
  } else {
    header.classList.remove('active')
    scroll.classList.remove('active')
  }
})

//scroll top

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
