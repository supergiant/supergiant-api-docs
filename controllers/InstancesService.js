'use strict';

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampInstancesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
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
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampInstancesIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  * id (String)
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

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampInstancesIdLogGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampInstancesIdStartPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  * id (String)
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

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampInstancesIdStopPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  * id (String)
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

