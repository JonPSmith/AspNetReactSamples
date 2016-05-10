var context = require.context('./Tests', true, /.test\.jsx?$/);
console.log(context.keys());
context.keys().forEach(context);
module.exports = context;
