'user strict';
const sql = require('../common/db.js');
const teacher = require('../viewModel/teacher.js');
const filter = require('../common/filter.js');
const mapper = require('automapper-js')
var data = {};

data.getAllTeachers = async function () {
    var teacherList = [];
    return new Promise((resolve, reject) => {
        sql.query("Call usp_GetAllEmployee()",function(err,res){
            if (err) {
                reject(err);
            }
            else{
                res[0].forEach(element => {
                    let teacherVm = mapper(teacher, element)
                   filter.filterObject(teacherVm);
                    teacherList.push(element);
                });
                resolve (teacherList);
            }
        })
    })
}

data.deleteTeacher = async function (teacherId) {
    var teacherList = [];
    return new Promise((resolve, reject) => {
        sql.query("SET @TID=?;  Call usp_DeleteTeacher(@TID)",teacherId , function(err,res){
            if (err) {
                reject(err);
            }
            else{
                resolve ("OK");
            }
        })
    })
}
module.exports = data;