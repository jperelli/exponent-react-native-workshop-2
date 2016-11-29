const googleConfig = {
  clientID: '151932179377-rebn2894kclmq598486d88sp9ui0kt3k.apps.googleusercontent.com',
  maps: {
    apiKey: 'AIzaSyAm_T8kZSRaQ2KGLeXBdSuZ01zqsmROq2c',
    url: 'https://maps.googleapis.com/maps/api/geocode/json'
  },
  getInfoUrl: (lat, lng) => {
    const url = `${googleConfig.maps.url}?latlng=${lat},${lng}&key=${googleConfig.maps.apiKey}`;
    return url;
  }
};

export default googleConfig;
