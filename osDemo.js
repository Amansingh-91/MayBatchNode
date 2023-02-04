const os = require("os");

const hostname = os.hostname();

const uptime = os.uptime();
const min = uptime /60;
console.log(hostname);
console.log(`up time is : ${min} seconds`);