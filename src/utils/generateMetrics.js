// Add some metrics programmatically by calling their generator
// e.g. some metrics are mostly repetitions except for their business
// category.
const generateMetrics = (contents, allFeatures) => {
  return contents.reduce((results, metric) => {
    if (!metric.generator) {
      results.push(metric);
    } else {
      results.push(...metric.generator(allFeatures));
    }
    return results;
  }, []);
};

export default generateMetrics;
