var HttpWebHooksPlatform = require('./src/homekit/HttpWebHooksPlatform');
var HttpWebHookSwitchAccessory = require('./src/homekit/accessories/HttpWebHookSwitchAccessory');
var HttpWebHookPushButtonAccessory = require('./src/homekit/accessories/HttpWebHookPushButtonAccessory');
var HttpWebHookStatelessSwitchAccessory = require('./src/homekit/accessories/HttpWebHookStatelessSwitchAccessory');

module.exports = function(homebridge) {
  homebridge.registerPlatform("homebridge-http-webhooks", "HttpWebHooks", HttpWebHooksPlatform);
  homebridge.registerAccessory("homebridge-http-webhooks", "HttpWebHookSwitch", HttpWebHookSwitchAccessory);
  homebridge.registerAccessory("homebridge-http-webhooks", "HttpWebHookPushButton", HttpWebHookPushButtonAccessory);
  homebridge.registerAccessory("homebridge-http-webhooks", "HttpWebHookStatelessSwitch", HttpWebHookStatelessSwitchAccessory);
};
