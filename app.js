

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
      //console.log(data);

      //Check if there are  Events

      const eventList = data.events.events
      if(eventList.length>0){

        //Display Events to UI

        ui.displayEvents(eventList)
      }else{
        //Print Message

        ui.printMessage('No Results Found' ,'text-center alert alert-danger')
      }
    })


  }else{
    //Display  Message
    ui.printMessage('Add an Event or City', 'alert alert-danger mt-3 text-center')
  }
})
