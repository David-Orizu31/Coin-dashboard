const CrmWidgetsConfigModule = angular.module('prf.widgets.config', []);

const EnvConfig = {
api: 'https://api.investcentral.proftit.com/',
streamer: 'https://streamer.investcentral.proftit.com/',
requestCache: 'true',
};

CrmWidgetsConfigModule
.constant('prfEnvConfig', EnvConfig)
;
