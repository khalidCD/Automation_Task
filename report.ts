import * as os from 'os';
import { generate } from 'multiple-cucumber-html-reporter';

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


generate({
  jsonDir: 'cucumber-report',
  reportPath: 'cucumber-html-report',
  metadata: {
    browser: { name: 'chrome', version: '92' },
    device: 'Local test machine',
    platform: { name: 'ubuntu', version: '20.04' }
  }
});