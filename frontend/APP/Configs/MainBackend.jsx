import * as axios from 'axios';
import config from '../../config.json'
import AsyncStorage from "@react-native-async-storage/async-storage";
let login_token="";
AsyncStorage.getItem("login_token",(err,result)=>{
    login_token = result;
})
var mainBackend = axios.create({ baseURL: String(config.baseURL),Headers: (login_token=="" ? null:login_token) })

export { mainBackend };