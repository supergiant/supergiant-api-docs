'use strict';

exports.appsApp_nameComponentsComponent_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
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

exports.appsApp_nameComponentsComponent_nameDeployPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "base_name" : "aeiou",
  "addresses" : {
    "internal" : [ {
      "address" : "aeiou",
      "port" : "aeiou"
    } ],
    "external" : [ "" ]
  },
  "name" : "aeiou",
  "cpu" : {
    "usage" : 1.3579000000000001069366817318950779736042022705078125,
    "limit" : 1.3579000000000001069366817318950779736042022705078125
  },
  "status" : "aeiou",
  "ram" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsApp_nameComponentsComponent_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "target_release_timestamp" : "aeiou",
  "addresses" : {
    "internal" : [ {
      "address" : "aeiou",
      "port" : "aeiou"
    } ],
    "external" : [ "" ]
  },
  "current_release_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "custom_deploy_script" : {
    "image" : "aeiou",
    "command" : [ "aeiou" ]
  },
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

exports.appsApp_nameComponentsComponent_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "target_release_timestamp" : "aeiou",
  "addresses" : {
    "internal" : [ {
      "address" : "aeiou",
      "port" : "aeiou"
    } ],
    "external" : [ "" ]
  },
  "current_release_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "custom_deploy_script" : {
    "image" : "aeiou",
    "command" : [ "aeiou" ]
  },
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

exports.appsApp_nameComponentsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "target_release_timestamp" : "aeiou",
  "addresses" : {
    "internal" : [ {
      "address" : "aeiou",
      "port" : "aeiou"
    } ],
    "external" : [ "" ]
  },
  "current_release_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "custom_deploy_script" : {
    "image" : "aeiou",
    "command" : [ "aeiou" ]
  },
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

exports.appsApp_nameComponentsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component (Component)
  **/
    var examples = {};
  examples['application/json'] = {
  "target_release_timestamp" : "aeiou",
  "addresses" : {
    "internal" : [ {
      "address" : "aeiou",
      "port" : "aeiou"
    } ],
    "external" : [ "" ]
  },
  "current_release_timestamp" : "aeiou",
  "created" : "aeiou",
  "name" : "aeiou",
  "custom_deploy_script" : {
    "image" : "aeiou",
    "command" : [ "aeiou" ]
  },
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

