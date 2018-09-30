
class EventBrite{

  //Constructor when instantiate

  constructor() {
    this.auth_token = 'CSJDHITXSQN4UFUL2UHR'
    this.orderby = 'date'

  }

  // Get categories from API
      async getCategoriesAPI() {

          //API

          const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)

          //Hold for the response and then return as json

          const categories = await categoriesResponse.json()

          return{
            categories
          }
      }

  //Get the Events from API

  async getEvents(eventName, category){

    const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

            // Wait for response and return as json

            const events = await eventsResponse.json();

            return {
                 events
            }


  }

}
