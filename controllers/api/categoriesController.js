// Services
const categoryService = require("../../services/categoryService");
const { Category } = require("../../database/models");

// Controller
const categoriesController = {
    findAll: async (req, res) => {
        let allCategories = await categoryService.findAll();
        allCategories.forEach(async (category) => {
            await categoryService.update(category.id, {
                count: category.products.length,
            });
        });
        let count = await Category.count();
        let categories = await categoryService.findAll();

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: categories,
            count: count,
        });
    },

    findOne: async (req, res) => {
        let category = await categoryService.findOne(req.params.id);
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: category,
        });
    },

    tableList: async (req, res) => {
        let page = req.query.page ? req.query.page : 0;
        let count = await Category.count();

        let categories = await Category.findAll({
            include: ["products", "types"],
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
            data: categories,
        });
    },

    filterType: async (req, res) => {
        let count;
        let filterCategories;
        if (req.params.id > 0) {
            filterCategories = await Category.findAll({
                include: ["products", "types"],
                where: { typeId: req.params.id },
            });
            count = filterCategories.length;
        } else if (req.params.id == 0) {
            filterCategories = await Category.findAll({
                include: ["products", "types"],
            });
            count = filterCategories.length;
        }

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: filterCategories,
        });
    },

    update: async (req, res) => {
        let category = await categoryService.update(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            typeId: req.body.typeId
        });

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: category,
        });
    },
};

module.exports = categoriesController;