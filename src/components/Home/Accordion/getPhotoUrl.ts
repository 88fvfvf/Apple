export const getPhotoUrl = (activeKey: string[]): string => {
    if (activeKey.every((key) => key === '1')) {
        return 'IphoneWatch.jpg';
    } else if (activeKey.every((key) => key === '2')) {
        return 'IphoneMac.jpg';
    } else {
        return 'IphoneAirpods.jpg';
    }
};