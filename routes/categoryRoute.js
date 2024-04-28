const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.route("/list").get(getAllCategory);
router.route("/create").post(createCategory);
router.route("/:id").patch(updateCategory);
router.route("/:id").delete(deleteCategory);
router.use(createUserValidateToken);

module.exports = router;
