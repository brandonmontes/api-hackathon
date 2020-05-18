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


function amiiboSelectedSuccess(amiibo) {
  console.log(amiibo)
}

function amiiboSelectedError(error) {
  console.log(error)
}


function chosenFighterAmiibo(id, name) {
  var amiiboID = document.getElementById(id)
  for (var i = 0; i < fighterButton.length; i++) {
    if (amiiboID === fighterButton[i]) {
      createAmiibo(name)
    } else {
      fighterButton[i].classList.add('hidden')
      console.log('failed')
    }
  }
}

function createAmiibo (name) {
  debugger
  var amiiboSeries = document.createElement('h3')
  amiiboSeries.textContent = name
  fighterContainer.append(amiiboSeries)
  console.log(amiiboSeries)

}
