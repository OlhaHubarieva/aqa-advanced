const BaseController = require("./basecontroller");

class PostsController extends BaseController {
    constructor() {
        super();
    }

    async getAllPosts() {
        return await this.axiosInstance.get("/posts")
    }

    async addPost(id, name, userName, email, address) {
        return await this.axiosInstance.post("/posts", {
            id,
            name,
            userName,
            email,
            address,
        })
    }
}

module.exports = new PostsController();