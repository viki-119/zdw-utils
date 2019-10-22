const lenb = require('./lenb');
const cutBytes = require('./cutBytes');
const common = require('./common');
const zdwUtils = {
	lenb,
	cutBytes,
};

Object.assign(zdwUtils, common)

module.exports = zdwUtils;
