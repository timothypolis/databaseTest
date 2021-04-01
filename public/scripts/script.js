
const visibilityToggle = function(id) {
    document.getElementById(id).classList.toggle("invisible");
}

const selectCharacter = function(name) {
    document.getElementById("character-name").innerHTML = name;
}

const changeURL = function(x) {
    window.location.href = x
}

$('#nav section').addClass(['black-element','round-element','transition-time'])
$('.character-semantics ~ section').addClass('character-semantics')
$('.character-semantics').addClass('white-element')
$('.character-semantics:last-child').addClass('bottom-text')
$('.character-stat-labels ~ section').addClass('character-stat-labels')
$('.character-stat-labels').addClass('gray-element')
$('.stat-bar ~ section').addClass('stat-bar')
$('.stat-bar').addClass('dark-gray-element')

/* document.getElementById("test").style.width = "14.28%";
document.getElementById("test").style.height = "100%"; */

console.log(character.characterName);