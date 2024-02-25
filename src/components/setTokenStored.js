import axios from 'axios';

function setAuthTokenStored() {
    localStorage.getItem("accessToken") ? axios.defaults.headers.common["Authorization"] = `Bearer ` + localStorage.getItem("accessToken") : delete axios.defaults.headers.common["Authorization"];
}
export default setAuthTokenStored