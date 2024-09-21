const BaseController = require("./basecontroller");

class AlbumsController extends BaseController {
    constructor() {
        super();
    }

    async getAllAlbums() {
        return await this.axiosInstance.get("/albums")
    }

    
}

module.exports = new AlbumsController();