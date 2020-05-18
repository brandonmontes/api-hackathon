//API's to use for Smash Bros http://smashlounge.com/api/doc (all techniques:/api/techs/all, all characters:/api/chars/all, specific character techniques:/api/attack/char/1)

//API's to use for Amiboo's https://www.amiiboapi.com/docs/ (characters: api/amiibo/?character="character")


var fighterButton = document.querySelectorAll('.fighter-select')

var fighterContainer = document.getElementById('fighter-container')


function fighterSelected(id) {
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://smashlounge.com/api/attack/char/' + id,
    success: chosenFighterSuccess,
    fail: chosenFighterError
  })
}

function chosenFighterSuccess(data) {
  console.log(data)
  var fighterName = data.charname
  var fighterID = data.id
  var name = fighterName.toLowerCase()
  amiiboSelected(name, fighterID)
}

function chosenFighterError(err) {
  console.log(err)
}

function amiiboSelected(charname, id) {
  $.ajax({
    method: "GET",
    url: "https://www.amiiboapi.com/api/amiibo/?character=" + charname,
    success: amiiboSelectedSuccess,
    fail: amiiboSelectedError
  })
  chosenFighterAmiibo(id, charname)
}

function amiiboSelectedSuccess(data) {
  console.log(data)
  var amiiboArray = data.amiibo
  var amiiboName = data.amiibo[0].character
  createAmiibo(amiiboName, amiiboArray)
}

function amiiboSelectedError(error) {
  console.log(error)
  // var noAmiibo = document.createElement('h2')
  // noAmiibo.textContent = 'No Amiibos Found'
  // fighterContainer.append(noAmiibo)
  // console.log(noAmiibo)
}

function chosenFighterAmiibo(id, name) {
  var amiiboID = document.getElementById(id)
  for (var i = 0; i < fighterButton.length; i++) {
    if (amiiboID !== fighterButton[i]) {
      fighterButton[i].classList.add('hidden')
    }
  }
}

function createAmiibo (name, amiibos) {
  var amiiboSeries = document.createElement('h2')
  var returnButton = document.createElement('button')
  var amiiboInfo = document.createElement('div')
  amiiboInfo.classList.add('amiibo-container')
  returnButton.textContent = 'Return'
  returnButton.classList.add('exit-main-screen')
  amiiboSeries.textContent = name
  fighterContainer.append(amiiboSeries)
  for (var f = 0; f < amiibos.length; f++) {
    var fighterSeries = document.createElement('p')
    var amiiboImage = document.createElement('img')
    amiiboImage.classList.add('amiibo')
    fighterSeries.textContent = amiibos[f].amiiboSeries
    amiiboImage.src = amiibos[f].image
    amiiboInfo.append(fighterSeries)
    amiiboInfo.append(amiiboImage)
  }
  fighterContainer.append(amiiboInfo)
  fighterContainer.append(returnButton)
  returnButton.addEventListener('click', function returnFighters() {
    for (var a = 0; a < fighterButton.length; a++){
    fighterButton[a].classList.remove('hidden')
    }
    fighterContainer.removeChild(amiiboSeries)
    fighterContainer.removeChild(returnButton)
    fighterContainer.removeChild(amiiboInfo)
  })
}
