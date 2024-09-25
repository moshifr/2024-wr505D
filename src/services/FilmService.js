import { api } from '@/services/api.js'

export default {
    search(query) {
        return api('/movies/search?title=' + query, {
            method: 'GET'
          })
    }

}