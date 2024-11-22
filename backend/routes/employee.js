const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee, duplicateEmail } = require('../controllers/employee');
const upload = require('../middleware/multer');

const router = express.Router();

router.post('/create', upload.single('image'), createEmployee);
router.get('/', getEmployees);
router.put('/update/:id', upload.single('image'), updateEmployee);
router.delete('/delete/:id', deleteEmployee);
router.post('/employees/check-email', duplicateEmail);

module.exports = router;