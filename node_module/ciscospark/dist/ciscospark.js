'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deleteProperty = require('babel-runtime/core-js/reflect/delete-property');

var _deleteProperty2 = _interopRequireDefault(_deleteProperty);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _defaults2 = require('lodash/defaults');

var _defaults3 = _interopRequireDefault(_defaults2);

require('@ciscospark/plugin-phone');

require('@ciscospark/plugin-logger');

var _sparkCore = require('@ciscospark/spark-core');

var _sparkCore2 = _interopRequireDefault(_sparkCore);

var _auth = require('./interceptors/auth');

var _auth2 = _interopRequireDefault(_auth);

var _memberships = require('./plugins/memberships');

var _memberships2 = _interopRequireDefault(_memberships);

var _messages = require('./plugins/messages');

var _messages2 = _interopRequireDefault(_messages);

var _people = require('./plugins/people');

var _people2 = _interopRequireDefault(_people);

var _rooms = require('./plugins/rooms');

var _rooms2 = _interopRequireDefault(_rooms);

var _teams = require('./plugins/teams');

var _teams2 = _interopRequireDefault(_teams);

var _teamMemberships = require('./plugins/team-memberships');

var _teamMemberships2 = _interopRequireDefault(_teamMemberships);

var _webhooks = require('./plugins/webhooks');

var _webhooks2 = _interopRequireDefault(_webhooks);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This shouldn't be necessary once the plugins are moved to their own packages
/**!
 *
 * Copyright (c) 2015-2016 Cisco Systems, Inc. See LICENSE file.
 * @private
 */

/* eslint camelcase: [0] */

var interceptors = {};
if (!_sparkCore.children.device) {
  interceptors['AuthInterceptor'] = _auth2.default.create;
}

(0, _sparkCore.registerPlugin)('memberships', _memberships2.default, {
  interceptors: interceptors
});
(0, _sparkCore.registerPlugin)('messages', _messages2.default);
(0, _sparkCore.registerPlugin)('people', _people2.default);
(0, _sparkCore.registerPlugin)('rooms', _rooms2.default);
(0, _sparkCore.registerPlugin)('teams', _teams2.default);
(0, _sparkCore.registerPlugin)('teamMemberships', _teamMemberships2.default);
(0, _sparkCore.registerPlugin)('webhooks', _webhooks2.default);

// documentation.js puts hashes in relative urls, so need to specify full urls
// here
/**
 * See {@link https://ciscospark.github.io/spark-js-sdk/example/browsers|Browser Guide} and
 * {@link https://ciscospark.github.io/spark-js-sdk/example/servers|Server Guide}
 * @see {@link /example/browsers|Browser Guide}
 * @see {@link /example/servers|Server Guide}
 * @class CiscoSpark
 * @extends SparkCore
 */
var ciscospark = new _sparkCore2.default({
  credentials: {
    authorization: {
      access_token: process.env.CISCOSPARK_ACCESS_TOKEN,
      refresh_token: process.env.CISCOSPARK_REFRESH_TOKEN
    }
  },
  config: _config2.default
});

/**
 * Create a new ciscospark instance.
 *
 * Note: ciscospark.init() really only applies to node apps at this time. In web
 * browsers, you'll want to stick with manipulating the ciscospark instance you
 * get from `require('ciscospark')`.
 *
 * In addition to creating spark instances when you need more than one at a time
 * (for example, on an Express route handler), you can use `ciscospark.init()`
 * to create instances with an alternate config object. You'll typically do this
 * when you want to provide an alternate storage backend:
 * ```javascript
 * const spark = ciscospark.init({
 *   config: {
 *     storage: {
 *       boundedAdapter: youCustomAdapter
 *     }
 *   }
 * })
 * ```
 * Previous versions of the sdk suggested you should pass credentials here.
 * While that still possible, we no longer document it because you should rely
 * on the storage layer instead.
 * @param {Object} attrs
 * @param {Object} attrs.config (optional)
 * @memberof CiscoSpark
 * @returns {CiscoSpark}
 */
ciscospark.init = function init(attrs) {
  if ((0, _has3.default)(attrs, 'credentials.access_token') || (0, _has3.default)('credentials.refresh_token')) {
    attrs.credentials.authorization = {};
    ['access_token', 'token_type', 'expires', 'expires_in', 'refresh_token', 'refresh_token_expires', 'refresh_token_expires_in'].forEach(function (key) {
      (0, _set3.default)(attrs, 'credentials.authorization.' + key, (0, _get3.default)(attrs, 'credentials.' + key));
      (0, _deleteProperty2.default)(attrs.credentials, key);
    });
  }

  attrs.config = (0, _defaults3.default)(attrs.config, _config2.default);

  return new _sparkCore2.default(attrs);
};

exports.default = ciscospark;
//# sourceMappingURL=ciscospark.js.map
