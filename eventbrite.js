
class EventBrite{

  //Constructor when instantiate

  constructor() {
    this.auth_token = 'CSJDHITXSQN4UFUL2UHR'

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

}
