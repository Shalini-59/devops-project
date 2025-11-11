// assets/load-sample-data.js
// Fetch the sample JSON and attach it to window.data, then call UI refresh functions if present.
(async function loadSampleData() {
  try {
    const res = await fetch('assets/sample-data.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch sample-data.json: ' + res.status);
    const sample = await res.json();

    // Make the sample available globally for the page scripts to read.
    window.data = sample;

    // Call the functions your page uses to recompute and render, if they exist.
    if (typeof refreshUI === 'function') refreshUI();
    if (typeof updatePieChart === 'function') updatePieChart();
    if (typeof updatePieChart === 'undefined' && typeof updatePie === 'function') updatePie(); // fallback check
    console.log('Sample data loaded and UI refresh attempted.');
  } catch (err) {
    console.error('Error loading sample data:', err);
  }
})();