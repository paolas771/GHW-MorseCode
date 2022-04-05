const crypt = new Map([
    ['a', '._'],
    ['b', '_...'],
    ['c', '_._.'],
    ['d', '_..'],
    ['e', '.'],
    ['f', '.._.'],
    ['g', '__.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.___'],
    ['k', '_._'],
    ['l', '._..'],
    ['m', '__'],
    ['n', '_.'],
    ['o', '___'],
    ['p', '.__.'],
    ['q', '__._'],
    ['r', '._.'],
    ['s', '...'],
    ['t', '_'],
    ['u', '.._'],
    ['v', '..._'],
    ['w', '.__'],
    ['x', '_.._'],
    ['y', '_.__'],
    ['z', '__..'],
    [' ', '/']
]);

const reversed = new Map([
    ['._', 'a'],
    ['_...', 'b'],
    ['_._.', 'c'],
    ['_..', 'd'],
    ['.', 'e'],
    ['.._.', 'f'],
    ['__.', 'g'],
    ['....', 'h'],
    ['..', 'i'],
    ['.___', 'j'],
    ['_._', 'k'],
    ['._..', 'l'],
    ['__', 'm'],
    ['_.', 'n'],
    ['___', 'o'],
    ['.__.', 'p'],
    ['__._', 'q'],
    ['._.', 'r'],
    ['...', 's'],
    ['_', 't'],
    ['.._', 'u'],
    ['..._', 'v'],
    ['.__', 'w'],
    ['_.._', 'x'],
    ['_.__', 'y'],
    ['__..', 'z'],
    ['/', ' ']
]);

var wordInput = document.getElementById("wordInput")
var submitButton = document.getElementById("submitButton")
var translateArea = document.getElementById("translateWord")
var codeInput = document.getElementById("morseInput")
var morseSubmit = document.getElementById("morseSubmit")
var translateCode = document.getElementById("translateMorse")


function translateWtoC(word){
    var firstLetter = ""
    for(var i = 0; i < word.length - 1; i++){
        firstLetter += crypt.get(word[i]) + " "
    }
    firstLetter += crypt.get(word[word.length-1])
    translateArea.value =  firstLetter
}

submitButton.addEventListener("click", function(){
    translateWtoC(wordInput.value)
});

function translateCtoW(code){
    translation = ""
    splitCode = code.split(" ")
    for (var i = 0; i < splitCode.length; i++){
        translation += reversed.get(splitCode[i])
    }
    translateCode.value = translation
}

morseSubmit.addEventListener("click", function(){
    translateCtoW(codeInput.value)
})
    
