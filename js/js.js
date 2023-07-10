const getColor = () => {// this function will be called every time the button is clicked
    const randomNumber1 = Math.floor(Math.random() * 16777215);//math.random give random no which is then multiplied by the fixed no 16777215 which then is rounded of to nearest nearest by the floor function.
    const hexCode1 = "#"+ randomNumber1.toString(16);//toString converts to a string with a radix of 16 that converts to hexadecimal format. this is then concatenated withe the # to form a hexCode.
    console.log(hexCode1);
    

    document.body.style.backgroundColor = hexCode1;// this changes the background color
    document.getElementById("btn").style.backgroundColor = hexCode1;//changes the color of the button.
    document.getElementById("hexNumber").innerText = hexCode1;//changes the text to the current hexadecimal number.
    document.getElementById("hexNumber").style.color = hexCode1;//changes the color of the hexCode

    navigator.clipboard.writeText(hexCode1);//copies the hexCode to the clipboard
}
//event call: when button is "click"
document.getElementById("btn").addEventListener("click", getColor);//this calls the function getColor using the event listener for the button "click"

//initial call: when page reloads
getColor();

