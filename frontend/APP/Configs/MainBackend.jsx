import * as axios from 'axios';
import config from '../../config.json'

var mainBackend = axios.create({ baseUrl: String(config.baseUrl) })

export { mainBackend };