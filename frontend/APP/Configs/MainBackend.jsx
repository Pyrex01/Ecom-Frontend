import axios from 'axios';
import config from '../../config.json'

var mainBackend = axios(config.baseUrl);

export {mainBackend};