

class UI {
     constructor(){
          // App inicialization
          this.init();
     }

  //Method when the app starts
  init(){
           // display categories in <select>
           this.printCategories();
           // Select the results
          this.result = document.querySelector('#result');
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

  //Display Events
  displayEvents(events){
    //console.log(events);

    let html =''
    //Loop through events and print them to html

    events.forEach(function(event){

      html += `
                   <div class="col-md-4 mt-4">
                        <div class="card">
                             <div class="card-body">
                                  <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}">
                             </div>
                             <div class="card-body">
                                  <div class="card-text">
                                       <h2 class="text-center card-title">${event.name.text}</h2>
                                       <p class="lead text-info">Event Information:</p>
                                       <p>${event.description.text.substring(0,200)}...</p>
                                       <span class="badge badge-primary">Capacity: ${event.capacity}</span>
                                       <span class="badge badge-secondary">Date & Time: ${event.start.local}</span>

                                       <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                                  </div>
                             </div>
                        </div>
                   </div>

              `

    })

    this.result.innerHTML = html
  }







}
