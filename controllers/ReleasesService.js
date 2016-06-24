'use strict';

exports.appsApp_nameComponentsComponent_nameReleasesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "termination_grace_period" : 1.3579000000000001069366817318950779736042022705078125,
  "committed" : true,
  "created" : "aeiou",
  "volumes" : [ {
    "size" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "type" : "aeiou"
  } ],
  "containers" : [ {
    "image" : "aeiou",
    "name" : "aeiou",
    "mounts" : [ {
      "volume" : "aeiou",
      "path" : "aeiou"
    } ],
    "cpu" : {
      "min" : "aeiou",
      "max" : "aeiou"
    },
    "ports" : [ {
      "entrypoint_domain" : "aeiou",
      "number" : 1.3579000000000001069366817318950779736042022705078125,
      "protocol" : "aeiou",
      "public" : true,
      "per_instance" : true,
      "external_number" : 1.3579000000000001069366817318950779736042022705078125
    } ],
    "env" : [ {
      "name" : "aeiou",
      "value" : "aeiou"
    } ],
    "command" : [ "aeiou" ],
    "ram" : {
      "min" : "aeiou",
      "max" : "aeiou"
    }
  } ],
  "retired" : true,
  "updated" : "aeiou",
  "instance_count" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "aeiou",
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

exports.appsApp_nameComponentsComponent_nameReleasesPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release (Release)
  **/
    var examples = {};
  examples['application/json'] = {
  "termination_grace_period" : 1.3579000000000001069366817318950779736042022705078125,
  "committed" : true,
  "created" : "aeiou",
  "volumes" : [ {
    "size" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "type" : "aeiou"
  } ],
  "containers" : [ {
    "image" : "aeiou",
    "name" : "aeiou",
    "mounts" : [ {
      "volume" : "aeiou",
      "path" : "aeiou"
    } ],
    "cpu" : {
      "min" : "aeiou",
      "max" : "aeiou"
    },
    "ports" : [ {
      "entrypoint_domain" : "aeiou",
      "number" : 1.3579000000000001069366817318950779736042022705078125,
      "protocol" : "aeiou",
      "public" : true,
      "per_instance" : true,
      "external_number" : 1.3579000000000001069366817318950779736042022705078125
    } ],
    "env" : [ {
      "name" : "aeiou",
      "value" : "aeiou"
    } ],
    "command" : [ "aeiou" ],
    "ram" : {
      "min" : "aeiou",
      "max" : "aeiou"
    }
  } ],
  "retired" : true,
  "updated" : "aeiou",
  "instance_count" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "aeiou",
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

exports.appsApp_nameComponentsComponent_nameReleasesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release (Release)
  **/
    var examples = {};
  examples['application/json'] = {
  "termination_grace_period" : 1.3579000000000001069366817318950779736042022705078125,
  "committed" : true,
  "created" : "aeiou",
  "volumes" : [ {
    "size" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "type" : "aeiou"
  } ],
  "containers" : [ {
    "image" : "aeiou",
    "name" : "aeiou",
    "mounts" : [ {
      "volume" : "aeiou",
      "path" : "aeiou"
    } ],
    "cpu" : {
      "min" : "aeiou",
      "max" : "aeiou"
    },
    "ports" : [ {
      "entrypoint_domain" : "aeiou",
      "number" : 1.3579000000000001069366817318950779736042022705078125,
      "protocol" : "aeiou",
      "public" : true,
      "per_instance" : true,
      "external_number" : 1.3579000000000001069366817318950779736042022705078125
    } ],
    "env" : [ {
      "name" : "aeiou",
      "value" : "aeiou"
    } ],
    "command" : [ "aeiou" ],
    "ram" : {
      "min" : "aeiou",
      "max" : "aeiou"
    }
  } ],
  "retired" : true,
  "updated" : "aeiou",
  "instance_count" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "aeiou",
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

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
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

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "termination_grace_period" : 1.3579000000000001069366817318950779736042022705078125,
  "committed" : true,
  "created" : "aeiou",
  "volumes" : [ {
    "size" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "type" : "aeiou"
  } ],
  "containers" : [ {
    "image" : "aeiou",
    "name" : "aeiou",
    "mounts" : [ {
      "volume" : "aeiou",
      "path" : "aeiou"
    } ],
    "cpu" : {
      "min" : "aeiou",
      "max" : "aeiou"
    },
    "ports" : [ {
      "entrypoint_domain" : "aeiou",
      "number" : 1.3579000000000001069366817318950779736042022705078125,
      "protocol" : "aeiou",
      "public" : true,
      "per_instance" : true,
      "external_number" : 1.3579000000000001069366817318950779736042022705078125
    } ],
    "env" : [ {
      "name" : "aeiou",
      "value" : "aeiou"
    } ],
    "command" : [ "aeiou" ],
    "ram" : {
      "min" : "aeiou",
      "max" : "aeiou"
    }
  } ],
  "retired" : true,
  "updated" : "aeiou",
  "instance_count" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "aeiou",
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

exports.appsApp_nameComponentsComponent_nameReleasesRelease_timestampPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app_name (String)
  * component_name (String)
  * release_timestamp (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "termination_grace_period" : 1.3579000000000001069366817318950779736042022705078125,
  "committed" : true,
  "created" : "aeiou",
  "volumes" : [ {
    "size" : 1.3579000000000001069366817318950779736042022705078125,
    "name" : "aeiou",
    "type" : "aeiou"
  } ],
  "containers" : [ {
    "image" : "aeiou",
    "name" : "aeiou",
    "mounts" : [ {
      "volume" : "aeiou",
      "path" : "aeiou"
    } ],
    "cpu" : {
      "min" : "aeiou",
      "max" : "aeiou"
    },
    "ports" : [ {
      "entrypoint_domain" : "aeiou",
      "number" : 1.3579000000000001069366817318950779736042022705078125,
      "protocol" : "aeiou",
      "public" : true,
      "per_instance" : true,
      "external_number" : 1.3579000000000001069366817318950779736042022705078125
    } ],
    "env" : [ {
      "name" : "aeiou",
      "value" : "aeiou"
    } ],
    "command" : [ "aeiou" ],
    "ram" : {
      "min" : "aeiou",
      "max" : "aeiou"
    }
  } ],
  "retired" : true,
  "updated" : "aeiou",
  "instance_count" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "aeiou",
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

