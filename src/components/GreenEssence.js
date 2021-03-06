// https://snazzymaps.com
module.exports = [
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#2aff00',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#eaeaea',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels',
    stylers: [
      {
        color: '#6cbfff',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b4e8ca',
      },
    ],
  },
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b7ffc2',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        hue: '#0090ff',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels',
    stylers: [
      {
        hue: '#0097ff',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#009eff',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#b7f2d0',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [
      {
        hue: '#00ff36',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: 700,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#7dcdcd',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b1e8ff',
      },
    ],
  },
];
