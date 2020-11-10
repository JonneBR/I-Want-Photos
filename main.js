// import setElements from './api.js';


let userInput = document.getElementById('image-form')[0];

// const imagesArray = [];

class App{
    constructor(){
    
      this.imagesArray = [];
       
      this.formEl = document.getElementById('image-form'); 
      this.iElement = document.getElementsByClassName('fa fa-search')[0];   

      this.registerHandlers();
  
    }
    registerHandlers(){
        this.iElement.onclick = event => {
            this.formEl.style.animationName = "centerToUP";
            this.addImagesIntoArray(event);
        }  
    };

    addImagesIntoArray(event){
        event.preventDefault();
        let i = 0;
        while(i !== 1){
            this.callAPIandPushToArray();
            i++
        }
        setElements(this.imagesArray);
        // console.log('teste');
    }

    callAPIandPushToArray = async() =>{
        const response = await fetch(`https://source.unsplash.com/1600x900/?${userInput.value}`);
        // console.log('TESTE',this.userInput.value)
        // console.log(response);
       this.imagesArray.push({
            imageUrl: response.url,
    
        }); 
        // console.log('array', imagesArray.imageUrl);
    }


}



function setElements(imagesArray){
    setTimeout (function(){
        this.imageContainer = document.getElementsByClassName("image-container")[0];
        console.log(imageContainer);
            imagesArray.forEach(image =>{
                var imgEl = document.createElement("img");
                imgEl.setAttribute('src',image.imageUrl) ;
                imageContainer.appendChild(imgEl);
            })       
    },3000);
}


new App();

// export