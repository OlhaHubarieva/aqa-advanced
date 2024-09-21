const axios = require("axios");

class BaseController {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            timeout: 2000,
            headers: { "Content-Type": "application/json" },
            validateStatus: function (status) {//Always return true, regardless of status code - буде з'я'влятись помилка сервера, а не помилка axios
                return true;
            }
        })

    }
}

module.exports = BaseController;