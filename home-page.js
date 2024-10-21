/*reviewstart*/

  
/*reviewend*/



 function bars(){
    data=document.getElementById('for-nav');
	if (matchMedia("(max-width: 500px)").matches) {
    data.style.width="100%";
		document.querySelector(".close").style.left="12px";
			document.getElementById('close').style.display="block";
		
	} else {
	
    data.style.width="250px";
		document.getElementById('close').style.display="block";
		
	}
}
function closes(){
da=document.getElementById('for-nav');
da.style.width="0";
	document.getElementById('close').style.display="none";



}



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".scrol").css("width" , "auto");
       

	  }

	  else{
		  $(".scrol").css("width" , "0");  
	
	  }
  })
})




var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}




var dropdown = document.getElementsByClassName("dropdown-btn_1");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}