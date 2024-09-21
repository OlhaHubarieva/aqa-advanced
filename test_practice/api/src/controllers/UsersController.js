const BaseController = require("./basecontroller");

class UsersController extends BaseController {
    constructor() {
        super();
    }

    async getAllUsers() {
        return await this.axiosInstance.get("/users")
    }

    
}

module.exports = new UsersController();