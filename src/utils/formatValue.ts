export const formatPopulationNumber = (value: any) => {
  const intValue = parseInt(value); // Convert value to an integer
  const valueStr = intValue.toString();
  const src = valueStr.replace(/[^\d/]/g, '');
  const numbers = src.replace(/[^\d]/g, '');
  const out = [];

  for (let i = numbers.length - 1, j = 1; i >= 0; i--, j++) {
    out.push(numbers[i]);
    if (j % 3 === 0 && i !== 0) {
      out.push('.');
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
    case 'float .2':
      return value ? `${parseFloat(String(value).replace(/,/g, '.')).toFixed(2)}` : '';
    case 'float .3':
      return value ? `${parseFloat(String(value).replace(/,/g, '.')).toFixed(3)}` : '';
    case 'money':
      return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
    default:
      return value ? value + '' : '-';
  }
};
