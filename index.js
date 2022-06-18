var HttpWebHookSwitchAccessory = require('./src/homekit/accessories/HttpWebHookSwitchAccessory');
var HttpWebHookPushButtonAccessory = require('./src/homekit/accessories/HttpWebHookPushButtonAccessory');
var HttpWebHookStatelessSwitchAccessory = require('./src/homekit/accessories/HttpWebHookStatelessSwitchAccessory');

module.exports = function(homebridge) {
  homebridge.registerAccessory("homebridge-discord", "HttpWebHookSwitch", HttpWebHookSwitchAccessory);
  homebridge.registerAccessory("homebridge-discord", "HttpWebHookPushButton", HttpWebHookPushButtonAccessory);
homebridge.registerAccessory("homebridge-discord", HttpWebHookStatelessSwitchAccessory);
};
