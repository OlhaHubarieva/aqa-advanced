const BaseController = require("./basecontroller");

class CommentsController extends BaseController {
    constructor() {
        super();
    }

    async getAllComments() {
        return await this.axiosInstance.get("/comments", { params: { postId: 1 } })
    }

    
}

module.exports = new CommentsController();