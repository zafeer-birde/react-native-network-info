'use strict';

import { NativeModules } from 'react-native';
const { RNNetworkInfo } = NativeModules;

const NetworkInfo = {
  async getSSID() {
    return await RNNetworkInfo.getSSID();
  },
  
  async getFrequency() {
    return await RNNetworkInfo.getFrequency();
  },

  async getBSSID() {
    return await RNNetworkInfo.getBSSID();
  },

  async getBroadcast() {
    return await RNNetworkInfo.getBroadcast();
  },

  async getIPAddress() {
    return await RNNetworkInfo.getIPAddress();
  },

  async getIPV4Address() {
    return await RNNetworkInfo.getIPV4Address();
  }
};

module.exports = { NetworkInfo };
