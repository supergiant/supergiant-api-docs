'use strict';

var url = require('url');


var Components = require('./ComponentsService');


module.exports.appsApp_nameComponentsComponent_nameDELETE = function appsApp_nameComponentsComponent_nameDELETE (req, res, next) {
  Components.appsApp_nameComponentsComponent_nameDELETE(req.swagger.params, res, next);
};

module.exports.appsApp_nameComponentsComponent_nameDeployPOST = function appsApp_nameComponentsComponent_nameDeployPOST (req, res, next) {
  Components.appsApp_nameComponentsComponent_nameDeployPOST(req.swagger.params, res, next);
};

module.exports.appsApp_nameComponentsComponent_nameGET = function appsApp_nameComponentsComponent_nameGET (req, res, next) {
  Components.appsApp_nameComponentsComponent_nameGET(req.swagger.params, res, next);
};

module.exports.appsApp_nameComponentsComponent_namePUT = function appsApp_nameComponentsComponent_namePUT (req, res, next) {
  Components.appsApp_nameComponentsComponent_namePUT(req.swagger.params, res, next);
};

module.exports.appsApp_nameComponentsGET = function appsApp_nameComponentsGET (req, res, next) {
  Components.appsApp_nameComponentsGET(req.swagger.params, res, next);
};

module.exports.appsApp_nameComponentsPOST = function appsApp_nameComponentsPOST (req, res, next) {
  Components.appsApp_nameComponentsPOST(req.swagger.params, res, next);
};
