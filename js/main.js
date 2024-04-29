/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = '#fff'
      target2.style.display = 'none'
    });
    element.style.color = '#f1c40f'
    target.style.display= 'flex'
  })
})
