//API's to use for Smash Bros http://smashlounge.com/api/doc (all techniques:/api/techs/all, all characters:/api/chars/all, specific character techniques:/api/attack/char/1)

//API's to use for Amiboo's https://www.amiiboapi.com/docs/ (characters: api/amiibo/?character="character")


var page1 = document.getElementById('page-1')

var page2 = document.getElementById('page-2')

var exitPage = document.getElementById('exit')

var meleePage = document.getElementById('melee')

var fighterContainer = document.querySelector('.fighter-container')

meleePage.addEventListener('click', meleeMenu)

exitPage.addEventListener('click', mainMenu)

fighterContainer.addEventListener('click', e => {
  if(!e.target.classList.contains('fighter-select')) return;
  const {id} = e.target
  fighterSelected(id)
})

function meleeMenu() {
  page1.classList.add('hidden')
  page2.classList.remove('hidden')

}

function mainMenu() {
  page2.classList.add('hidden')
  page1.classList.remove('hidden')
}
