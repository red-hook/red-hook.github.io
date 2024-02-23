
/* This function updates the tabindex for each image
so focus can be applied using the keyboard  */

function tabTime () {
  let imageArray = document.querySelectorAll('.preview');

  console.log(imageArray); //output array contents to console for debugging

  for (i=0; i < imageArray.length; i++) {
    imageArray[i].tabIndex = "0";
  }
}

function upDate(previewPic){
 /*  1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */
  
    document.querySelector('#image').style.background = "url(" + previewPic.src + ")";
    
    
   /*  2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
   
   document.querySelector('#image').innerHTML = previewPic.alt;
   document.querySelector('#image').style.fontWeight = "900";
    document.querySelector('#image').style.fontSize = "225%";
	}

	function unDo(){
     /* 1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was */

        document.querySelector('#image').style.background = "initial";
   

    
    /* 2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
    document.querySelector('#image').style.background = "#8e68ff";
    document.querySelector('#image').style.fontWeight = "initial";
    document.querySelector('#image').style.fontSize = "150%"
	}