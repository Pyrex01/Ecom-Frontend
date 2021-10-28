import * as axios from 'axios';
import config from '../../config.json'

var mainBackend = axios.create({ baseURL: String(config.baseURL)  })

export { mainBackend };