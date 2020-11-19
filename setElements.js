 function setElements(imagesArray,changeImageButton){
    setTimeout (function(){
        this.imageContainer = document.getElementsByClassName("image-container")[0];     
            imagesArray.forEach(image =>{
                var imgEl = document.createElement("img");
                imgEl.setAttribute('src',image.imageUrl) ;
                imageContainer.appendChild(imgEl);
                this.spinnerElement = document.getElementById('spinner').style.visibility = "hidden";
            })       
            changeImageButton.style.visibility = "visible";
    },3000);
}

export default setElements;