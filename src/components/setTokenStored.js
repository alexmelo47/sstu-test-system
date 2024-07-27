import axios from 'axios';

export default function setAuthTokenStored() { //установка токена для авторизации всех запросов
    localStorage.getItem("accessToken") ? axios.defaults.headers.common["Authorization"] = `Bearer ` + localStorage.getItem("accessToken") : delete axios.defaults.headers.common["Authorization"];
}