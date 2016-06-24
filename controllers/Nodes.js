'use strict';

var url = require('url');


var Nodes = require('./NodesService');


module.exports.nodesGET = function nodesGET (req, res, next) {
  Nodes.nodesGET(req.swagger.params, res, next);
};

module.exports.nodesIdDELETE = function nodesIdDELETE (req, res, next) {
  Nodes.nodesIdDELETE(req.swagger.params, res, next);
};

module.exports.nodesIdGET = function nodesIdGET (req, res, next) {
  Nodes.nodesIdGET(req.swagger.params, res, next);
};

module.exports.nodesIdPUT = function nodesIdPUT (req, res, next) {
  Nodes.nodesIdPUT(req.swagger.params, res, next);
};

module.exports.nodesPOST = function nodesPOST (req, res, next) {
  Nodes.nodesPOST(req.swagger.params, res, next);
};
