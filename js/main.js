document.getElementById('barbarian').onclick = barbarianLines
document.getElementById('bard').onclick = bardLines
document.getElementById('cleric').onclick = clericLines
document.getElementById('druid').onclick = druidLines
document.getElementById('fighter').onclick = fighterLines
document.getElementById('monk').onclick = monkLines
document.getElementById('paladin').onclick = paladinLines
document.getElementById('ranger').onclick = rangerLines
document.getElementById('rogue').onclick = rogueLines
document.getElementById('sorcerer').onclick = sorcererLines
document.getElementById('warlock').onclick = warlockLines
document.getElementById('wizard').onclick = wizardLines


function barbarianLines() {
  document.querySelector('body').style.backgroundImage = "url('../dndpicker/css/img/Barbarian.png')"
  document.querySelector('body').style.color = '#8d6f55'
}
function bardLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Bard.png')"
  document.querySelector('body').style.color = '#862864'
}

function clericLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Cleric.png')"
  document.querySelector('body').style.color = '#6679a4'
}

function druidLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Druid.png')"
  document.querySelector('body').style.color = '#516a4c'
}
function fighterLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Fighter.png')"
  document.querySelector('body').style.color = '#49403b'
}
function monkLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Monk.png')"
  document.querySelector('body').style.color = '#7fadd1'
}

function paladinLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Paladin.png')"
  document.querySelector('body').style.color = '#ce9373'
}

function rangerLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Ranger.png')"
  document.querySelector('body').style.color = '#4d5337'
}
function rogueLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Rogue.png')"
  document.querySelector('body').style.color = '#3f3945'
}
function sorcererLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Sorcerer.png')"
  document.querySelector('body').style.color = '#7b3c4f'
}

function warlockLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Warlock.png')"
  document.querySelector('body').style.color = '#31333f'
}

function wizardLines() {
  document.querySelector('body').style.backgroundImage = "url('../dnd-class-picker/css/img/Wizard.png')"
  document.querySelector('body').style.color = '#76707e'
}
