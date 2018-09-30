

class UI {
     constructor(){
          // App inicialization
          this.init();
     }

  //Method when the app starts
  init(){
           // display categories in <select>
           this.printCategories();
        }


  printCategories(){
    const categoriesList =  eventbrite.getCategoriesAPI() //returns Promise

          .then(data => {
            console.log(data.categories.categories);
          })
  }
}
