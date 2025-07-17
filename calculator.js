let textValue="";
function ChangeTextValue(userValue)
{

    if (userValue === "=")
    {
        document.querySelector(".display").value = eval(textValue);
    }
    else if (userValue === "C")
    {
        textValue = ""
        document.querySelector(".display").value = textValue;
    }
    else
    {
        textValue =textValue + userValue;
        document.querySelector(".display").value = textValue;

        
    }
}