'use strict';

var url = require('url');


var Apps = require('./AppsService');


module.exports.appsGET = function appsGET (req, res, next) {
  Apps.appsGET(req.swagger.params, res, next);
};

module.exports.appsNameDELETE = function appsNameDELETE (req, res, next) {
  Apps.appsNameDELETE(req.swagger.params, res, next);
};

module.exports.appsNameGET = function appsNameGET (req, res, next) {
  Apps.appsNameGET(req.swagger.params, res, next);
};

module.exports.appsNamePUT = function appsNamePUT (req, res, next) {
  Apps.appsNamePUT(req.swagger.params, res, next);
};

module.exports.appsPOST = function appsPOST (req, res, next) {
  Apps.appsPOST(req.swagger.params, res, next);
};
