import { Service, PlatformAccessory, CharacteristicValue } from 'homebridge';

import { ExampleHomebridgePlatform } from './platform';

/**
 * Platform Accessory
 * An instance of this class is created for each accessory your platform registers
 * Each accessory may expose multiple services of different service types.
 */
// Example Switch Plugin

module.exports = (api) => {
  api.registerAccessory('ExampleSwitchPlugin', ExampleSwitchAccessory);
};

class ExampleSwitchAccessory {

  constructor(log, config, api) {
      this.log = log;
      this.config = config;
      this.api = api;

      this.Service = this.api.hap.Service;
      this.Characteristic = this.api.hap.Characteristic;

      // extract name from config
      this.name = config.name;

      // create a new Switch service
      this.service = new this.Service(this.Service.Switch);

      // create handlers for required characteristics
      this.service.getCharacteristic(this.Characteristic.On)
        .onGet(this.handleOnGet.bind(this))
        .onSet(this.handleOnSet.bind(this));

  };

  /**
   * Handle requests to get the current value of the "On" characteristic
   */
  handleOnGet() {
    this.log.debug('Triggered GET On');

    // set this to a valid value for On
    const currentValue = 1;

    return currentValue;
  }

  /**
   * Handle requests to set the "On" characteristic
   */
  handleOnSet(value) {
    this.log.debug('Triggered SET On:' value);
  }

}
