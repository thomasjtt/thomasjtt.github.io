var slideview = new Array(4);
var t=0;

for(var i = 0; i<slideview.length; i++)

slideview[i] = new Image(400,265);
slideview[0].src="images/signalProcessing.jpg";
slideview[1].src="images/aimath.jpg";
slideview[2].src="images/ceob.jpg";
slideview[3].src="images/aiface.jpg";

function slideImages()
{
    var interval = window.setInterval("slides()",3000);
    
}

function slides()
{
	document.getElementById('slidepics').src =slideview[t].src;
    t++;
	if(t>3) t=0;
    
}

function formValidation()
{
    var fname=document.forms["contactus"]["first"].value;
    var lname=document.forms["contactus"]["last"].value;
    var em=document.forms["contactus"]["email"].value;

    if (fname==null || fname=="")
    {
        alert("Don't Leave Empty Blanks");
        return false;
    }
    
    if (lname==null || lname=="")
    {
        alert("Don't Leave Empty Blanks");
        return false;
    }
    
    if (em==null || em=="" || em.includes("@") ==false)
    {
        alert("Not a valid email");
        return false;
    }
    return true;
}