/**
 * Over Sky Holidays - Production Backend API Verification Suite
 * Tests live production endpoints against https://api.openskyholidays.com/api
 * Output format:
 * PASS | STATUS | ENDPOINT
 * FAIL | STATUS | ENDPOINT | ERROR
 */

const BASE_URL = 'https://api.openskyholidays.com/api';

const endpoints = [
  '/tours',
  '/tour-types',
  '/services',
  '/blogs',
  '/heroes',
  '/testimonials',
  '/about-section/active',
  '/our-stories',
  '/about-why-choose-us/active',
  '/about-our-core-values',
  '/our-processes/active',
  '/travel-support/active',
  '/adventures',
  '/adventure-categories',
  '/counters/active',
  '/what-we-offers',
  '/page-banners',
  '/page-banners/page/contact',
  '/page-banners/page/blogs',
  '/top-header/active',
  '/contact-section/active',
  '/offer-banners',
  '/why-choose-sections/active',
];

async function runSuite() {
  console.log('='.repeat(80));
  console.log('OVER SKY HOLIDAYS - PRODUCTION API TEST SUITE');
  console.log(`Base URL: ${BASE_URL}`);
  console.log('='.repeat(80));

  let passed = 0;
  let failed = 0;

  for (const path of endpoints) {
    const url = `${BASE_URL}${path}`;
    try {
      const res = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'OverSkyHolidays-Verifier/2.0',
        },
      });

      if (res.status >= 200 && res.status < 300) {
        console.log(`PASS | ${res.status} | ${path}`);
        passed++;
      } else {
        console.log(`FAIL | ${res.status} | ${path} | HTTP ${res.status}`);
        failed++;
      }
    } catch (err) {
      console.log(`FAIL | ERR | ${path} | ${err.message}`);
      failed++;
    }
  }

  // Blog Details verification by real slug
  try {
    const blogsRes = await fetch(`${BASE_URL}/blogs?page=1&per_page=1`, {
      headers: { 'Accept': 'application/json' },
    });
    const blogsJson = await blogsRes.json();
    const firstSlug = blogsJson.data?.[0]?.slug;
    if (firstSlug) {
      const detailRes = await fetch(`${BASE_URL}/blogs/${firstSlug}`, {
        headers: { 'Accept': 'application/json' },
      });
      if (detailRes.status >= 200 && detailRes.status < 300) {
        console.log(`PASS | ${detailRes.status} | /blogs/${firstSlug}`);
        passed++;
      } else {
        console.log(`FAIL | ${detailRes.status} | /blogs/${firstSlug} | HTTP ${detailRes.status}`);
        failed++;
      }
    }
  } catch (err) {
    console.log(`FAIL | ERR | /blogs/:slug | ${err.message}`);
    failed++;
  }

  // Form endpoint validation tests (does not create records, checks 422 Unprocessable)
  try {
    const res = await fetch(`${BASE_URL}/tour-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({}),
    });
    if (res.status === 422) {
      console.log(`PASS | ${res.status} | POST /tour-inquiries (Validation)`);
      passed++;
    } else {
      console.log(`FAIL | ${res.status} | POST /tour-inquiries | Expected 422 validation, got ${res.status}`);
      failed++;
    }
  } catch (err) {
    console.log(`FAIL | ERR | POST /tour-inquiries | ${err.message}`);
    failed++;
  }

  try {
    const res = await fetch(`${BASE_URL}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({}),
    });
    if (res.status === 422) {
      console.log(`PASS | ${res.status} | POST /enquiries (Validation)`);
      passed++;
    } else {
      console.log(`FAIL | ${res.status} | POST /enquiries | Expected 422 validation, got ${res.status}`);
      failed++;
    }
  } catch (err) {
    console.log(`FAIL | ERR | POST /enquiries | ${err.message}`);
    failed++;
  }

  console.log('='.repeat(80));
  console.log(`TOTAL SUITE RESULTS: ${passed} PASSED, ${failed} FAILED.`);
  console.log('='.repeat(80));

  if (failed > 0) {
    process.exit(1);
  }
}

runSuite();
