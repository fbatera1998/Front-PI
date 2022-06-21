import Vue from 'vue'
import axios from 'axios'


Vue.use(axios)

export default class ApiCep {
    static async searchAdress(filters) {
        var url = "https://viacep.com.br/ws/"

        return await axios.get(url + filters + '/json')
            .then(res => { return res.data })
            .catch(err => { return err })
    }
}