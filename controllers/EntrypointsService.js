'use strict';

exports.entrypointsDomainDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * domain (String)
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

exports.entrypointsDomainGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * domain (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "created" : "aeiou",
  "domain" : "aeiou",
  "updated" : "aeiou",
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

exports.entrypointsDomainPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * domain (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "created" : "aeiou",
  "domain" : "aeiou",
  "updated" : "aeiou",
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

exports.entrypointsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "address" : "aeiou",
  "created" : "aeiou",
  "domain" : "aeiou",
  "updated" : "aeiou",
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

exports.entrypointsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * entrypoint (Entrypoint)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "created" : "aeiou",
  "domain" : "aeiou",
  "updated" : "aeiou",
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

