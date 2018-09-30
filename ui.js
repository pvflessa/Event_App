

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

          //  console.log(data.categories.categories);

            const categoriesList = data.categories.categories


            const categorySelect = document.querySelector('#category')

            //Loop through
            categoriesList.forEach(function(category){
              //Create Options
              const option = document.createElement('option')

              option.value = category.id
              option.appendChild(document.createTextNode(category.name))
              categorySelect.appendChild(option)

            })

          })
          .catch(err => console.log(err))
  }

  // Message

  printMessage(message, className){
    //Create div
    const div = document.createElement('div')
    //Give a class to div
    div.className = className
    //add the text
    div.appendChild(document.createTextNode(message))
    //add to html
    const searchDiv = document.querySelector('#search-events')
    searchDiv.appendChild(div)

    //Remove the alert after 3 sec

    setTimeout(()=>{
      this.removeMessage()
    },3000)
  }

  //Remove Message

  removeMessage(){
    const alert = document.querySelector('.alert')
    if(alert){
      alert.remove()
    }
  }
}
