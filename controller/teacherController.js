const express = require('express');
const teacher = require('../model/teacherModel.js');
const router = express.Router();

// get all teacher 
router.get('/all', async (req, res) => {
    try {
        const result = await teacher.getAllTeachers();
        res.json(result);
    } catch (err) {
        const error = err.code + ' | ' + err.sqlMessage + ' | ' + err.sql;
        res.status(500).json(err);
    }
});

router.delete('/:teacherId', async (req, res) => {
    try {
        const result = await teacher.deleteTeacher(req.params.teacherId);
        res.json(result);
    } catch (err) {
        const error = err.code + ' | ' + err.sqlMessage + ' | ' + err.sql;
        res.status(500).json(err);
    }
});
module.exports = router;