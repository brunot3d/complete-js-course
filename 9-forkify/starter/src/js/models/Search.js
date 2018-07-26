// http://food2fork.com/api/search 
import axios from 'axios'

export default class Search{
  constructor(query){
    this.query = query
  }
  async getResults(){
    const key = '066661a5a31f5092313d9f14a0ffbfe4'
    try {
      const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${this.query}`)
      this.result = res.data.recipes
      // console.log(this.result)
    } catch (error) {
      alert(error)
    }
  }
}

