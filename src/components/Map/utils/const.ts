import mapboxgl from 'mapbox-gl';

export const accessToken =
  'pk.eyJ1IjoibGVvc2dvbWVzIiwiYSI6ImNsMDhob3FiNDAzZm8zaW4zZXp3ZHdjMDcifQ.G84YIGM34H0GzLEReMR5iQ';

export const stateSourceLayer = 'BR_UF_2020-dp2j5o';
export const districtSourceLayer = 'GO_Municipios_2020-1z028s';

export const fillOpacity = [
  'case',
  ['boolean', ['feature-state', 'click'], false],
  1,
  ['boolean', ['feature-state', 'highlight'], false],
  1,
  ['boolean', ['feature-state', 'hover'], false],
  1,
  0.8,
];

export const lineWidth = [
  'case',
  ['boolean', ['feature-state', 'click'], false],
  1.8,
  ['boolean', ['feature-state', 'highlight'], false],
  1.8,
  ['boolean', ['feature-state', 'hover'], false],
  1.8,
  0.75,
];

export const lineOpacity = [
  'case',
  ['boolean', ['feature-state', 'click'], false],
  1.5,
  ['boolean', ['feature-state', 'highlight'], false],
  1.5,
  ['boolean', ['feature-state', 'hover'], false],
  1.5,
  0.5,
];

export const hoveredPopup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  className: 'floating-popup',
});

export const clickedPopup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  className: 'floating-popup',
});
