const LIGHT_BRIGHTNESS_LIMIT = 127.5;

export function getColorFromGradient(min: string, max: string, value: number) {
  const minColor = stringToColor(min);
  const maxColor = stringToColor(max);

  const getRGBColor = (color: 'red' | 'green' | 'blue') => {
    return Math.round((maxColor[color] - minColor[color]) * value + minColor[color]);
  };

  const gradient = {
    red: getRGBColor('red'),
    green: getRGBColor('green'),
    blue: getRGBColor('blue'),
  };

  const result = `rgb(${Object.values(gradient).join(',')})`;
  return result;
}

export function lightOrDark(color: string) {
  const rgb = stringToColor(color);

  // Using HSP (Highly Sensitive Perceived Brightness) system to determinate RGB color brightness
  const colorBrightness = Math.sqrt(
    0.299 * (rgb.red * rgb.red) + 0.587 * (rgb.green * rgb.green) + 0.114 * (rgb.blue * rgb.blue),
  );

  if (colorBrightness > LIGHT_BRIGHTNESS_LIMIT) {
    return 'black';
  } else {
    return 'white';
  }
}

const stringToColor = (rgb: string) => {
  const array = rgb.replace(/rgba?\((.*)\)/, '$1').split(',');
  const color = {
    red: Number(array[0]),
    green: Number(array[1]),
    blue: Number(array[2]),
  };
  return color;
};
