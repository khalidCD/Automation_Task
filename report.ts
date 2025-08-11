import * as os from 'os';

const { generate } = require('multiple-cucumber-html-reporter');

interface PlatformInfo {
  name: string;
  version: string;
}

function getPlatformInfo(): PlatformInfo {
  return {
    name: os.platform(),
    version: os.release()
  };
}

function generateReport() {
  const platformInfo: PlatformInfo = getPlatformInfo();
  generate({
    jsonDir: "test-results",
    openReportInBrowser: true,
    reportPath: "./report",
    reportName: "Xened Automation Test Report",
    displayDuration: true,
    metadata: {
      browser: {
        name: "Chrome",
        version: "121",
      },
      device: os.hostname(),
      platform: platformInfo,
    },
  });
}

generateReport();
