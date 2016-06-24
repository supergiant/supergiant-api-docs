'use strict';

exports.tasksGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "created" : "aeiou",
  "max_attempts" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "error" : "aeiou",
  "action_data" : "aeiou",
  "updated" : "aeiou",
  "attempts" : 1.3579000000000001069366817318950779736042022705078125,
  "status" : "aeiou",
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

exports.tasksIdDELETE = function(args, res, next) {
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

exports.tasksIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "created" : "aeiou",
  "max_attempts" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "error" : "aeiou",
  "action_data" : "aeiou",
  "updated" : "aeiou",
  "attempts" : 1.3579000000000001069366817318950779736042022705078125,
  "status" : "aeiou",
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

