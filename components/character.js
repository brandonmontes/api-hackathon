//API's to use for Smash Bros http://smashlounge.com/api/doc (all techniques:/api/techs/all, all characters:/api/chars/all, specific character techniques:/api/attack/char/1)

//API's to use for Amiboo's https://www.amiiboapi.com/docs/ (characters: api/amiibo/?character="character")


  function fighterSelected(id, charname, attacks) {
    fetch('https://cors-anywhere.herokuapp.com/http://smashlounge.com/api/attack/char/' + id)
    .then(res=>res.json())
    .then(data=> console.log(data))
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/http://smashlounge.com/api/attack/char/' + id,
      data: {
        "name": charname,
        "attacks": attacks
      },
      success: chosenFighterSuccess,
      fail: chosenFighterError
    })

  }

  function chosenFighterSuccess() {
    console.log(name, attacks)
  }

   function chosenFighterError(err) {
    console.log(err)
  }


// function amiiboSelected(id) {
//   $.ajax({
//     method: "GET",
//     url: "https://www.amiiboapi.com/api/amiibo/?character=" + id
//   })
// }
