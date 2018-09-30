

//Instatciate Classes

const eventbrite = new EventBrite();

const ui = new UI();

//Event Listeners

document.querySelector('#submitBtn').addEventListener('click',function(e){
  e.preventDefault()

  //Get Form Values

  const eventName = document.querySelector('#event-name').value
  const category = document.querySelector('#category').value

  //console.log(`${eventName} , ${category}`);

  //Check The Inputs

  if(eventName !== '' ){
    //Get Events from API

    eventbrite.getEvents(eventName,category)
    .then(data => {
      console.log(data);
    })


  }else{
    //Display  Message
    ui.printMessage('Add an Event or City', 'alert alert-danger mt-3 text-center')
  }
})
