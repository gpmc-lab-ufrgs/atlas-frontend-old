export const formatPopulationNumber = (value: any) => {
  const valueStr = value.toString();
  const src = valueStr.replace(/[^\d/]/g, '');
  const numbers = src.replace(/[^\d]/g, '');
  const out: any = [];

  for (let i = numbers.length - 1, j = 1; i >= 0; i--, j++) {
    out.push(numbers[i]);
    if (j % 3 === 0 && i !== 0) {
      out.push(',');
    }
  }

  out.reverse();
  const outString = out.join('');
  return outString;
};

export const formatValue = (value: any, format: string) => {
  if (value === undefined || value === null) {
    return 'n/a';
  }

  switch (format) {
    case 'population':
      return formatPopulationNumber(value);
    case 'percent':
      return `${Math.floor(parseFloat(value))}%`;
    case 'percent_normalized':
      return `${(value * 100.0).toFixed(2)}%`;
    case 'float_2':
      return value ? `${parseFloat(String(value).replace(/,/g, '.')).toFixed(2)}` : '';
    case 'float_3':
      return value ? `${parseFloat(String(value).replace(/,/g, '.')).toFixed(3)}` : '';
    default:
      return value ? value + '' : '-';
  }
};
