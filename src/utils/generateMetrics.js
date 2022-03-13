// Add some metrics programmatically by calling their generator
// e.g. some metrics are mostly repetitions except for their business
// category.
const generateMetrics = (contents, allDistricts) => {
  return contents.reduce((results, metric) => {
    if (!metric.generator) {
      results.push(metric);
    } else {
      results.push(...metric.generator(allDistricts));
    }
    return results;
  }, []);
};

export default generateMetrics;
