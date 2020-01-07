(function() {

    let color = `Green`
    
    function printColor () {
    console.log(color)
    }
    
    printColor()
})();

function makeColor(color){
    let colorMessage = `The color is ${color}`
    return function(){
      console.log(colorMessage)  
    } 
}

let redColorPrinter = makeColor(`Red`)
console.log(redColorPrinter())