const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.findAll);
router.get("/:number", UserController.findSpecific);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
