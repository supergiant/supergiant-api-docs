'use strict';

exports.nodesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "out_of_disk" : true,
  "provider_creation_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "cpu" : {
    "usage" : 1.3579000000000001069366817318950779736042022705078125,
    "limit" : 1.3579000000000001069366817318950779736042022705078125
  },
  "id" : "aeiou",
  "class" : "aeiou",
  "updated" : "aeiou",
  "external_ip" : "aeiou",
  "status" : "aeiou",
  "ram" : "",
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

exports.nodesIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
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

exports.nodesIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "out_of_disk" : true,
  "provider_creation_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "cpu" : {
    "usage" : 1.3579000000000001069366817318950779736042022705078125,
    "limit" : 1.3579000000000001069366817318950779736042022705078125
  },
  "id" : "aeiou",
  "class" : "aeiou",
  "updated" : "aeiou",
  "external_ip" : "aeiou",
  "status" : "aeiou",
  "ram" : "",
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

exports.nodesIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "out_of_disk" : true,
  "provider_creation_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "cpu" : {
    "usage" : 1.3579000000000001069366817318950779736042022705078125,
    "limit" : 1.3579000000000001069366817318950779736042022705078125
  },
  "id" : "aeiou",
  "class" : "aeiou",
  "updated" : "aeiou",
  "external_ip" : "aeiou",
  "status" : "aeiou",
  "ram" : "",
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

exports.nodesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * node (Node)
  **/
    var examples = {};
  examples['application/json'] = {
  "out_of_disk" : true,
  "provider_creation_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "cpu" : {
    "usage" : 1.3579000000000001069366817318950779736042022705078125,
    "limit" : 1.3579000000000001069366817318950779736042022705078125
  },
  "id" : "aeiou",
  "class" : "aeiou",
  "updated" : "aeiou",
  "external_ip" : "aeiou",
  "status" : "aeiou",
  "ram" : "",
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

