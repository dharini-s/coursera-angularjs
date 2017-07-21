/**
 * Created by dharini on 7/18/17.
 */
var student =
    {
        name: "",
        type: "student"
    };

//Fire function when page is loaded
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event)
{
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event)
{
    calculateNumericOutput();
}

function calculateNumericOutput()
{
    student.name = document.getElementById('name').value;
    var totalNameValue = 0;
    for(var i=0; i<student.name.length; ++i)
    {
        totalNameValue += student.name.charCodeAt(i);
    }

    // Insert result into page
    var output = "Total numeric value of the name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}