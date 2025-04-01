const express = require("express");
<<<<<<< HEAD
const { body, validationResult } = require("express-validator");
const { getStudents, addStudent, updateStudent, deleteStudent } = require("../controllers/studentController");


const router = express.Router();


router.get("/", getStudents);
router.post("/", [
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("course").isString().notEmpty().withMessage("Course is required")
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    addStudent(req, res);
});
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;
=======
const multer = require("multer");
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get("/", getStudents);
router.post("/", upload.single("image"), addStudent);
router.put("/:id", upload.single("image"), updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
>>>>>>> 783a195 (Initial commit)
