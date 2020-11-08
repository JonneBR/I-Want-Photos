let userInput = document.getElementById('image-form')[0];

const imagesArray = [];

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
            getImagesFromAPI();
            i++
        }
        setElements();
        console.log('teste');
    }
}


let getImagesFromAPI = async() =>{
    const response = await fetch(`https://source.unsplash.com/1600x900/?${userInput.value}`);
    // console.log('TESTE',this.userInput.value)
    console.log(response);
    imagesArray.push(response.url); 
}

function setElements(){
    setTimeout (function(){
        this.imageContainer = document.getElementsByClassName("image-container")[0];
        console.log(imageContainer);
            imagesArray.forEach(image =>{
                var imgEl = document.createElement("img");
                imgEl.setAttribute('src',image) ;
                imageContainer.appendChild(imgEl);
            })       
            console.log('image',imagesArray[0]);
    },3000);
}

new App();