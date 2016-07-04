var context = require.context('./JsUnitTests/Tests', true, /.test\.jsx?$/);
//console.log(context.keys());
context.keys().forEach(context);
module.exports = context;
