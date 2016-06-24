'use strict';

exports.registriesDockerhubReposGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "secret_type" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "updated" : "aeiou",
  "key" : "aeiou",
  "tags" : "{}"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registriesDockerhubReposNameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registriesDockerhubReposNameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "secret_type" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "updated" : "aeiou",
  "key" : "aeiou",
  "tags" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registriesDockerhubReposNamePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "secret_type" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "updated" : "aeiou",
  "key" : "aeiou",
  "tags" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registriesDockerhubReposPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * repo (Repo)
  **/
    var examples = {};
  examples['application/json'] = {
  "secret_type" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "updated" : "aeiou",
  "key" : "aeiou",
  "tags" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

