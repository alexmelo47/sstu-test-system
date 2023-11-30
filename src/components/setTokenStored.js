import axios from 'axios';

function setAuthTokenStored() {
    if (localStorage.getItem("accessToken")) {
        axios.defaults.headers.common["Authorization"] = `Bearer ` + localStorage.getItem("accessToken");
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}
export default setAuthTokenStored