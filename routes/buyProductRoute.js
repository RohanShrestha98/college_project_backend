const express = require("express");
const router = express.Router();
const createUserValidateToken = require("../middleware/createUserValidateToken");
const {
  createBuyProduct,
  getAllBuyProduct,
  updateBuyProduct,
  deleteBuyProduct,
  getAllBuyProductByUser,
} = require("../controllers/buyProductController");

router.route("/list").get(getAllBuyProduct);
router.route("/create").post(createBuyProduct);
router.route("/update/:id").patch(updateBuyProduct);
router.route("/delete/:id").delete(deleteBuyProduct);
router.use(createUserValidateToken);
router.route("/list-by-user").get(getAllBuyProductByUser);

module.exports = router;
