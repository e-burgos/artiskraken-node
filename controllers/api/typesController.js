// Services
const typeService = require("../../services/typeService");
const { Type } = require("../../database/models");

// Controller
const typesController = {
    findAll: async (req, res) => {
        let allTypes = await typeService.findAll();
        allTypes.forEach(async (type) => {
            await typeService.update(type.id, {
                count: type.categories.length,
            });
        });
        let count = await Type.count();
        let types = await typeService.findAll();

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: types,
            count: count,
        });
    },

    findOne: async (req, res) => {
        let type = await typeService.findOne(req.params.id);
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: type,
        });
    },
    
};

module.exports = typesController;