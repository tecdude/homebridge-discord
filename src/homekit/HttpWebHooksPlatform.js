const Constants = require('../Constants');
const Server = require('../Server');

var HttpWebHookSensorAccessory = require('./accessories/HttpWebHookSensorAccessory');
var HttpWebHookSwitchAccessory = require('./accessories/HttpWebHookSwitchAccessory');
var HttpWebHookStatelessSwitchAccessory = require('./accessories/HttpWebHookStatelessSwitchAccessory');

var Service, Characteristic;

function HttpWebHooksPlatform(log, config, homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  this.log = log;
  this.cacheDirectory = config["cache_directory"] || Constants.DEFAULT_CACHE_DIR;
  this.storage = require('node-persist');
  this.storage.initSync({
    dir : this.cacheDirectory
  });


  this.switches = config["switches"] || [];
  this.pushButtons = config["pushbuttons"] || [];
  this.statelessSwitches = config["statelessswitches"] || [];

  this.server = new Server(Service, Characteristic, this, config);
};

HttpWebHooksPlatform.prototype.accessories = function(callback) {
  var accessories = [];

  for (var i = 0; i < this.switches.length; i++) {
    var switchAccessory = new HttpWebHookSwitchAccessory(Service, Characteristic, this, this.switches[i]);
    accessories.push(switchAccessory);
  }

  for (var i = 0; i < this.pushButtons.length; i++) {
    var pushButtonsAccessory = new HttpWebHookPushButtonAccessory(Service, Characteristic, this, this.pushButtons[i]);
    accessories.push(pushButtonsAccessory);
  }

  for (var i = 0; i < this.statelessSwitches.length; i++) {
    var statelessSwitchAccessory = new HttpWebHookStatelessSwitchAccessory(Service, Characteristic, this, this.statelessSwitches[i]);
    accessories.push(statelessSwitchAccessory);
  }


  this.server.setAccessories(accessories);
  this.server.start();

  callback(accessories);
};

module.exports = HttpWebHooksPlatform;
