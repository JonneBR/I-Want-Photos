import setElements from './setElements.js';

class App{
    constructor(){
    
      this.imagesArray = [];
       
      this.formEl = document.getElementById('image-form'); 
      this.iElement = document.getElementsByClassName('fa fa-search')[0];  
      this.userInput = document.getElementById('image-form')[0];
      this.changeImageButton = document.getElementsByClassName("fa fa-random")[0];

      this.registerHandlers();
      this.ShowButtonAndChangeImage();
    //   this.substituteImageArrayAndButtom();
  
    }

    substituteImageArrayAndButtom(){
        this.changeImageButton.style.visibility = "hidden";
        this.imageContainer = document.querySelector("img").remove();
        this.imagesArray.pop();
        this.addImages(event);

    }

    ShowButtonAndChangeImage(){
        this.changeImageButton.onclick = event =>{
        this.spinnerElement = document.getElementById('spinner').style.visibility = "visible"; 
        this.substituteImageArrayAndButtom();
        // this.changeImageButton.style.visibility = "hidden";
        // this.imageContainer = document.querySelector("img").remove();
        // this.imagesArray.pop();
        // this.addImages(event);
        }

    }



    registerHandlers(){
        this.iElement.onclick = event => {
            if(this.formEl.style.animationName == ""){
                this.formEl.style.animationName = "centerToUP";
                this.spinnerElement = document.getElementById('spinner').style.visibility = "visible"; 
                this.addImages(event);
            }else{
                this.substituteImageArrayAndButtom();
                console.log('else');
                this.spinnerElement = document.getElementById('spinner').style.visibility = "visible";
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
        if(1 == 1){
            this.getImagesFromAPI();
        }
        setElements(this.imagesArray,this.changeImageButton);
    }
    
}

new App();

