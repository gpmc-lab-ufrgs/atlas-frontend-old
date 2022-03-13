export function getColorFromGradient(rgbString1, rgbString2, value) {
    const color1 = stringToColor(rgbString1);
    const color2 = stringToColor(rgbString2);
    let color = {
      red: Math.round((color2.red - color1.red) * value + color1.red),
      green: Math.round((color2.green - color1.green) * value + color1.green),
      blue: Math.round((color2.blue - color1.blue) * value + color1.blue),
    };
    const result = `rgb(${Object.values(color).join(',')})`;
    return result;
  }

  const stringToColor = (rgbString) => {
    const array = rgbString.replace(/rgba?\((.*)\)/, '$1').split(',');
    const color = {
      red: array[0] * 1,
      green: array[1] * 1,
      blue: array[2] * 1,
    }
    return color;
  }
  