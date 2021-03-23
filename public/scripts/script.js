var OCtypes = [OCsMarvel,OCsDC,OCsPV];
var OCsMarvel = ["Bobby",""];
var OCsDC = [];
var OCsPV = ["Biobdaris","Void","Homo Atlas","Chancer?","Krishna"];

const visibilityToggle = function(id) {
    document.getElementById(id).classList.toggle("invisible");
}

const selectCharacter = function(name) {
    document.getElementById("character-name").innerHTML = name;
}

const semanticColorInjector = function(color) {
    
}

$('#nav section').addClass(['black-element','round-element','transition-time'])
$('.character-semantics ~ section').addClass('character-semantics')
$('.character-semantics').addClass('white-element')
$('.character-semantics:last-child').addClass('bottom-text')
$('.character-stat-labels ~ section').addClass('character-stat-labels')
$('.character-stat-labels').addClass('gray-element')