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
};

module.exports = usersController;