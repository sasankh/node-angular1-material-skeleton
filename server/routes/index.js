'use strict';

module.exports = function(app) {
  require('./api/index')(app);
  require('./views/index')(app);
};
