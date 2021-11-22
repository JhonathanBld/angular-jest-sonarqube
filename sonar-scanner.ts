const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login': 'admin',
            'sonar.password': '123',
            'sonar.projectKey': '3f8d8239090bdcc5b152ae3d343a5e64d885f84c',
            'sonar.tests':  'src',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'       
        }
    }, () => {});

// sonar-scanner.bat -D"sonar.projectKey=angular-sonar" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=3f8d8239090bdcc5b152ae3d343a5e64d885f84c" -D"sonar.password=123" -D"sonar.login=admin"