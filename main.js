import setElements from './api.js';

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
            this.formEl.style.animationName = "centerToUP";
            this.addImages(event);
        }  
    };

    async addImages(event){
        event.preventDefault();

        const response = await fetch (`https://source.unsplash.com/1600x900/?${this.userInput.value}`);
        var i = 0
        while(i !== 1){
            this.imagesArray.push({
                imageUrl: response.url,
            }); 
            i++
        }
        setElements(this.imagesArray);
    }
}

new App();

// export