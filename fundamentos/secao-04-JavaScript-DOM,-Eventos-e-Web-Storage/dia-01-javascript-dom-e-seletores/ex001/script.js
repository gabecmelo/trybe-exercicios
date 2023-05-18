const header = document.querySelector('#header-container')
header.style.background = '#28b567'

const sections = document.querySelectorAll('section')
sections[0].style.background = '#fa9191'
sections[1].style.background = '#e8da5f'

const urgents = document.querySelectorAll('.emergency-tasks h3')
urgents[0].style.background = '#A020F0'
urgents[1].style.background = '#A020F0'

const notUrgents = document.querySelectorAll('.no-emergency-tasks h3')
notUrgents[0].style.background = '#1C1C1C'
notUrgents[1].style.background = '#1C1C1C'

const footer = document.querySelector('#footer-container')
footer.style.background = '#0b3636'