const router = require("express").Router();
const { ensureAuthenticated } = require("../config/guards.config");
const {
  signupForm,
  signup,
  uploadImage,
  userProfile,
  userList,
  followUser,
  unFollowUser,
} = require("../controllers/users.controller");

router.get("/", userList);
router.get("/:username", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);
router.post("/update/image", ensureAuthenticated, uploadImage);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unFollowUser);

module.exports = router;
