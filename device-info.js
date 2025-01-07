// device-info.js
function getDeviceInfo() {
    let deviceInfo = {
        device: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };
    console.log(deviceInfo);
    return deviceInfo;
}

getDeviceInfo();  // Fonksiyonu çağırıyoruz
