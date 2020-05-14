//API's to use for Smash Bros http://smashlounge.com/api/doc (all techniques:/api/techs/all, all characters:/api/chars/all, specific character techniques:/api/attack/char/1)

//API's to use for Amiboo's https://www.amiiboapi.com/docs/ (characters: api/amiibo/?character="character")


var mainVid = document.getElementById('smash-trailer')

var vidButton = document.getElementById('background-vid')

var characterVid = document.getElementById('smash-melee-menu')

var characterButton = document.getElementById('pause-menu')

var themeAudio = document.getElementById('theme-audio')

var buttonAudio = document.getElementById('mute-button')


buttonAudio.addEventListener('click', musicPause)

vidButton.addEventListener('click', videoPause)

characterButton.addEventListener('click', videoPause)


function videoPause() {
  if (mainVid.paused) {
    mainVid.play()
    vidButton.classList.remove('play-video')
    vidButton.classList.add('pause-video')
  } else {
    mainVid.pause()
    vidButton.classList.remove('pause-video')
    vidButton.classList.add('play-video')
  }
}

function characterVideoPause() {
  if (characterVid.paused) {
    characterVid.play()
    characterButton.classList.remove('play-video')
    characterButton.classList.add('pause-video')
  } else {
    characterVid.pause()
    characterButton.classList.remove('pause-video')
    characterButton.classList.add('play-video')
  }
}


function musicPause() {
  if(themeAudio.paused){
    themeAudio.play()
    buttonAudio.classList.remove('play-audio')
    buttonAudio.classList.add('mute-audio')
  } else {
    themeAudio.pause()
    buttonAudio.classList.remove('mute-audio')
    buttonAudio.classList.add('play-audio')
  }
}
