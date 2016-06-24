'use strict';

var url = require('url');


var ReposDockerhubOrgs = require('./ReposDockerhubOrgsService');


module.exports.registriesDockerhubReposGET = function registriesDockerhubReposGET (req, res, next) {
  ReposDockerhubOrgs.registriesDockerhubReposGET(req.swagger.params, res, next);
};

module.exports.registriesDockerhubReposNameDELETE = function registriesDockerhubReposNameDELETE (req, res, next) {
  ReposDockerhubOrgs.registriesDockerhubReposNameDELETE(req.swagger.params, res, next);
};

module.exports.registriesDockerhubReposNameGET = function registriesDockerhubReposNameGET (req, res, next) {
  ReposDockerhubOrgs.registriesDockerhubReposNameGET(req.swagger.params, res, next);
};

module.exports.registriesDockerhubReposNamePUT = function registriesDockerhubReposNamePUT (req, res, next) {
  ReposDockerhubOrgs.registriesDockerhubReposNamePUT(req.swagger.params, res, next);
};

module.exports.registriesDockerhubReposPOST = function registriesDockerhubReposPOST (req, res, next) {
  ReposDockerhubOrgs.registriesDockerhubReposPOST(req.swagger.params, res, next);
};
