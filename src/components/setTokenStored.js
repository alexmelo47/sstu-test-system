import axios from 'axios';

function setAuthTokenStored() { //установка токена для авторизации всех запросов
    localStorage.getItem("accessToken") ? axios.defaults.headers.common["Authorization"] = `Bearer ` + localStorage.getItem("accessToken") : delete axios.defaults.headers.common["Authorization"];
}
export default setAuthTokenStored