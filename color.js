//copy all colors to the list
let buttons = document.getElementsByTagName('button');
let copyButtons = [];
for (let i = 0;i<buttons.length;i++)
{
    copyButtons.push(buttons[i].classList[1]);
}


function colorChange(yourChoice)
{
    if(yourChoice.value == 'red')
    {
        colorRed();
        console.log("red is clicked");
    }
    else if(yourChoice.value == 'green')
    {
        colorGreen();   
        console.log("green is clicked");
    }
    else if(yourChoice.value == 'blue')
    {
        colorBlue();
        console.log("blue is clicked");
    }
    else if(yourChoice.value == 'yellow')
    {
        colorYellow();
        console.log("yellow is clicked");
    }
    else if(yourChoice.value == 'gray')
    {
        colorGray();
        console.log("gray is clicked");
    }
    else if(yourChoice.value == 'random')
    {
        colorRandom();
        console.log("random is clicked");
    }
    else if(yourChoice.value == 'default')
    {
        colorDefault();
        console.log("default is clicked");
    }
}
function colorRed()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-danger');
    }
}
function colorGreen()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-success');
    }
}
function colorBlue()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-primary');
    }
}
function colorYellow()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-warning');
    }
}
function colorGray()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-secondary');
    }
}
function colorDefault()
{
    for(let i = 0;i<buttons.length;i++)
    {
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(copyButtons[i]);
    }
}
function colorRandom()
{
    let choices=['btn-danger','btn-primary','btn-success','btn-warning','btn-secondary'];
    for(let i = 0;i<buttons.length;i++)
    {
        let random=Math.floor(Math.random()*5);
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(choices[random]);
    }
}