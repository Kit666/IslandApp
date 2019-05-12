import {HTTP} from '../Util/http.js'

class Classic extends HTTP {
  getLatest () {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        console.log(res)
      }
    })
  }
}