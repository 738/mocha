'use strict';

function ReporterWithOptions(runner, options) {
  console.log(JSON.stringify(options.reporterOptions));
}

module.exports = ReporterWithOptions;
