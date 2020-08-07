const os = require('os');

const ip = {
  getIPAddress: () => {
    let interfaces  = os.networkInterfaces();
    let address;

    console.log(interfaces)

    // for (let devName in interfaces) {
    //   let iface = interface[devName];
    //   for (let i = 0; i < iface.length; i ++) {
    //     let alias = iface[i];
    //     if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
    //       address = alias.address;
    //     }
    //   }
    // }

    return address;
  }
};

module.exports = ip;