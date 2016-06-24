'use strict';

var url = require('url');


var Tasks = require('./TasksService');


module.exports.tasksGET = function tasksGET (req, res, next) {
  Tasks.tasksGET(req.swagger.params, res, next);
};

module.exports.tasksIdDELETE = function tasksIdDELETE (req, res, next) {
  Tasks.tasksIdDELETE(req.swagger.params, res, next);
};

module.exports.tasksIdGET = function tasksIdGET (req, res, next) {
  Tasks.tasksIdGET(req.swagger.params, res, next);
};
