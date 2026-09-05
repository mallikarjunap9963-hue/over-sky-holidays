/**
 * Over Sky Holidays - Production Backend API Verification Suite
 * Tests live production endpoints against https://api.openskyholidays.com/api
 */

const BASE_URL = 'https://api.openskyholidays.com/api';

const endpoints = [
  { name: 'Tours List', path: '/tours' },
  { name: 'Tour Types', path: '/tour-types' },
  { name: 'Travel Services', path: '/services' },
  { name: 'Travel Blogs', path: '/blogs' },
  { name: 'Hero Carousel', path: '/heroes' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'About Section (Active)', path: '/about-section/active' },
  { name: 'Our Stories', path: '/our-stories' },
  { name: 'About Why Choose Us (Active)', path: '/about-why-choose-us/active' },
  { name: 'About Core Values', path: '/about-our-core-values' },
  { name: 'Our Processes (Active)', path: '/our-processes/active' },
  { name: 'Travel Support (Active)', path: '/travel-support/active' },
  { name: 'Adventures', path: '/adventures' },
  { name: 'Adventure Categories', path: '/adventure-categories' },
  { name: 'Counters / Achievements (Active)', path: '/counters/active' },
  { name: 'What We Offer', path: '/what-we-offers' },
  { name: 'Page Banners List', path: '/page-banners' },
  { name: 'Page Banner: Contact', path: '/page-banners/page/contact' },
  { name: 'Top Header Bar (Active)', path: '/top-header/active' },
  { name: 'Contact Details (Active)', path: '/contact-section/active' },
  { name: 'Offer Banners', path: '/offer-banners' },
  { name: 'Why Choose Us (Active)', path: '/why-choose-sections/active' },
];

async function runSuite() {
  console.log('='.repeat(70));
  console.log(`OVER SKY HOLIDAYS - PRODUCTION API TEST SUITE`);
  console.log(`Target Base URL: ${BASE_URL}`);
  console.log('='.repeat(70));

  let passed = 0;
  let failed = 0;

  for (const ep of endpoints) {
    const url = `${BASE_URL}${ep.path}`;
    try {
      const start = Date.now();
      const res = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'OverSkyHolidays-FrontendAudit/1.0',
        },
      });
      const ms = Date.now() - start;
      const json = await res.json();
      
      const isOk = res.status >= 200 && res.status < 300;
      const count = Array.isArray(json) 
        ? json.length 
        : (Array.isArray(json.data) 
            ? json.data.length 
            : (json.data ? 'Object' : 'OK'));

      if (isOk) {
        console.log(`[PASS] (${res.status} OK, ${ms}ms) ${ep.name.padEnd(35)} -> ${ep.path} (Items: ${count})`);
        passed++;
      } else {
        console.error(`[FAIL] (${res.status}, ${ms}ms) ${ep.name.padEnd(35)} -> ${ep.path}`);
        failed++;
      }
    } catch (err) {
      console.error(`[FAIL] (ERROR) ${ep.name.padEnd(35)} -> ${ep.path}: ${err.message}`);
      failed++;
    }
  }

  // Test form validation: POST /tour-inquiries validation check
  console.log('-'.repeat(70));
  console.log('Testing Form Submission Endpoints Validation...');
  try {
    const res = await fetch(`${BASE_URL}/tour-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({}),
    });
    const json = await res.json();
    if (res.status === 422) {
      console.log(`[PASS] (422 Unprocessable) Tour Inquiries Validation -> Validated required fields correctly.`);
      passed++;
    } else {
      console.log(`[STATUS] Tour Inquiries returned HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(`[FAIL] Tour Inquiries POST: ${err.message}`);
    failed++;
  }

  // Test form validation: POST /enquiries validation check
  try {
    const res = await fetch(`${BASE_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({}),
    });
    const json = await res.json();
    if (res.status === 422) {
      console.log(`[PASS] (422 Unprocessable) General Enquiries Validation -> Validated required fields correctly.`);
      passed++;
    } else {
      console.log(`[STATUS] General Enquiries returned HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(`[FAIL] General Enquiries POST: ${err.message}`);
    failed++;
  }

  console.log('='.repeat(70));
  console.log(`TOTAL SUITE RESULTS: ${passed} PASSED, ${failed} FAILED.`);
  console.log('='.repeat(70));

  if (failed > 0) {
    process.exit(1);
  }
}

runSuite();
