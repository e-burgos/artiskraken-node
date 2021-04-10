// Services
const userService = require("../../services/userService");
const { User } = require("../../database/models")

// Controller
const usersController = {
    findAll: async (req, res) => {
        let count = await User.count();
        let users = await userService.findAll();
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: users,
        });
    },

    userCount: async (req, res) => {
        let count = await User.count();
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: count,
        });
    },

    findOne: async (req, res) => {
        try {
            let user = await userService.findOne(req.params.id);
            res.json({
                meta: {
                    status: 200,
                    url: req.originalUrl,
                },
                data: user,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    
    tableList: async (req, res) => {
        let page = req.query.page ? req.query.page : 0;
        let count = await User.count();

        let users = await User.findAll({
            include: ["orders", "addresses", "comments", "shops"],
            order: [["id", "ASC"]],
            offset: page * 10,
            limit: 10,
        });

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: users,
        });
    },
};

module.exports = usersController;