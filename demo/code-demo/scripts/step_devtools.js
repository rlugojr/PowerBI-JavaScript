function OpenEmbedStepWithSampleMSIT(){
    return OpenEmbedStepWithDevtoolSample('MSIT');
}
function OpenEmbedStepWithSampleDXT(){
    return OpenEmbedStepWithDevtoolSample('DXT');
}

function OpenEmbedStepWithSampleEDOG(){
    return OpenEmbedStepWithDevtoolSample('EDOG');
}

function OpenEmbedStepWithDevtoolSample(sampleType) {
    var staticReportUrl = null;
    switch (sampleType){
        case 'MSIT':
            staticReportUrl = 'http://localhost:1248/api/reports?id=bf33002e-9adc-452d-a0b5-fb649d806358&env=Msit';
            break;
        case 'DXT':
            staticReportUrl = 'http://localhost:1248/api/reports?id=e54c36f0-46eb-4d17-8121-f98e5148c8be&env=Dxt';
            break;
        case 'EDOG':
            staticReportUrl = 'http://localhost:1248/api/reports?id=f360ea1a-3d5c-4aca-a3e5-303f30c84c05&env=Edog';
            break;
    }

    fetch(staticReportUrl).then(function (response) {
        if (response.ok) {
            return response.json().then(function (embedConfig) {
                OpenEmbedStepWithSampleValues(embedConfig.accessToken, embedConfig.embedUrl, embedConfig.id);
            });
        }
    });

}