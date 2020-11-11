import setElements from './setElements.js';

class App{
    constructor(){
    
      this.imagesArray = [];
       
      this.formEl = document.getElementById('image-form'); 
      this.iElement = document.getElementsByClassName('fa fa-search')[0];  
      this.userInput = document.getElementById('image-form')[0];

      this.registerHandlers();
  
    }
    registerHandlers(){
        this.iElement.onclick = event => {
            if(this.formEl.style.animationName == ""){
                console.log('TA ENTRANDO DE NOVO?');
                this.formEl.style.animationName = "centerToUP";
                this.spinnerElement = document.getElementById('spinner').style.visibility = "visible";
                this.addImages(event);
            }else{
                this.imageContainer = document.querySelector("img").remove();
                this.spinnerElement = document.getElementById('spinner').style.visibility = "visible";
                // this.addImages(event);
                // console.log(this.imageContainer);
            }
            
        } 
         
    };

    getImagesFromAPI = async() => {
        const response = await fetch(`https://source.unsplash.com/1600x900/?${this.userInput.value}`);
        this.imagesArray.push({
            imageUrl: response.url,
        }); 
        console.log(this.imagesArray);
    }


    async addImages(event){
        event.preventDefault();
        var i = 0
        while(i !== 1){
            // const response = await fetch (`https://source.unsplash.com/1600x900/?${this.userInput.value}`);
            // console.log(response);
            // this.imagesArray.push({
            //     imageUrl: response.url,
            // }); 
            this.getImagesFromAPI();
            i++
            // console.log(response.url);
            // console.log(this.imagesArray);
        }
        setElements(this.imagesArray);
    }
    
    
   

}



new App();

