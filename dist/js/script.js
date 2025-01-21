function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win') || userAgent.includes('linux')) return 'windows';
    if (userAgent.includes('mac')) return 'mac';
    if (userAgent.includes('android')) return 'android';
    if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios';
    return 'windows'; // default fallback
}

const platformURLs = {
    windows: 'https://store.steampowered.com/app/322170/Geometry_Dash/',
    mac: 'https://apps.apple.com/fr/app/geometry-dash/id625334537',
    android: 'https://play.google.com/store/apps/details?id=com.robtopx.geometryjump',
    ios: 'https://apps.apple.com/fr/app/geometry-dash/id625334537'
};

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.dlButton button');
    const platform = detectPlatform();
    
    downloadButton.addEventListener('click', () => {
        window.open(platformURLs[platform], '_blank');
    });
});