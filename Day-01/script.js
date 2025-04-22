function countChar()
{
    let data = document.getElementById("input").value;
    if(!data)
    {
        alert("Please enter something in data field first!")
        return; // if not returned, value keeps getiing updated
    }
    else
    {
    let words = data.split(/\s+/); // this divides the string into an array of words based on spaces
    let wordCount = words.length;
    let charCount = data.length;
    
    let disp = document.getElementById("display-box");
       disp.innerHTML = `No. of words = ${wordCount} <br> No. of characaters = ${charCount}`;
       w = 0;
    }
}
