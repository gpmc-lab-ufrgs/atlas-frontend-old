export const formatPopulationNumber = (value: any) => {
  const valueStr = value.toString();
  const src = valueStr.replace(/[^\d/]/g, "");
  const numbers = src.replace(/[^\d]/g, "");
  const out: any = [];

  for (let i = numbers.length - 1, j = 1; i >= 0; i--, j++) {
    out.push(numbers[i]);
    if (j % 3 === 0 && i !== 0) {
      out.push(".");
    }
  }

  out.reverse();
  const outString = out.join("");
  return outString;
};
