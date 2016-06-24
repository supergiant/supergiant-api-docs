'use strict';

var url = require('url');


var Entrypoints = require('./EntrypointsService');


module.exports.entrypointsDomainDELETE = function entrypointsDomainDELETE (req, res, next) {
  Entrypoints.entrypointsDomainDELETE(req.swagger.params, res, next);
};

module.exports.entrypointsDomainGET = function entrypointsDomainGET (req, res, next) {
  Entrypoints.entrypointsDomainGET(req.swagger.params, res, next);
};

module.exports.entrypointsDomainPUT = function entrypointsDomainPUT (req, res, next) {
  Entrypoints.entrypointsDomainPUT(req.swagger.params, res, next);
};

module.exports.entrypointsGET = function entrypointsGET (req, res, next) {
  Entrypoints.entrypointsGET(req.swagger.params, res, next);
};

module.exports.entrypointsPOST = function entrypointsPOST (req, res, next) {
  Entrypoints.entrypointsPOST(req.swagger.params, res, next);
};
