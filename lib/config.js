/**
 * jsWHATauto configuration manager
 *
 * Synchronous validation and consolidation of all the configuration and generally
 * setting up for TCP connections.
 */
"use strict";
var fs = require("fs");
var util = require("utile");
var bunyan = require("bunyan");
var request = require("request");

// Set up a global logger
var log = bunyan.createLogger({
  name: "jsWHATauto",
  stream: process.stdout,
  level: "info",
});

log.info("Starting main program.");
log.info("jsWHATauto: mavin.");
log.info("pyWHATauto: johnnyfive + blubba.");
log.info("WHATauto: mlapaglia.");

// parse the setup.js (TODO: yaml)

// Defaults
// DO NOT EDIT THESE UNLESS YOU KNOW WHAT YOU'RE DOING
var defaultConfig = {
  useragent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
  owners: ["34038@johnnyfive","3808@johnnyfive","191067@blubba","1868@blubba"],
  silly: true,
};

// merge defaults and user settings

// TODO: check the regex server
var regexRunning = false;
// do an INFO or OPTIONS to get the regex/main program version
// hold on to those values for later

// parse the credentials.js (TODO: yaml)
log.info("loading credentials");
var creds = require('../credentials');
var sites = {};
for (var site in Object.keys(creds)) {
  if (creds[site].enable) {
    log.debug("%s enabled", site);
    sites[site] = creds[site];
  }
}

// assume we the regex API is running, stream the json file to regex.json.tmp
// delete regex.json, stream the temp file to regex.tmp, delete temp file.
// parse json, for each Site, find the regex entry and transfer the keys
if (regexRunning) {
  log.info("downloading regex.json");
  request(config.regexUrl).pipe(fs.createWriteStream("regex.json"));
}

// Verify
// make sure we have all the required keys and information for each site

// Setup
// load cookies or create them
// parse and compile regex
// verify watch dirs (exists, writeable)

// Load the silly shit
var silly = {
  active: true,
  startupMessages: [],
  pinkyResponses: [],
  sass: {},
  rageQuit: []
};

// attach to the export
// emit config-ready

/*
## add custom sites to config
### put all config values into non-managed memory (SlowBuffer) to help with gc
 */

