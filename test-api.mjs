import http from 'http';

function post(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    }, (res) => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(resBody) }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function get(path) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:5000' + path, (res) => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(resBody) });
        } catch (e) {
          resolve({ status: res.statusCode, data: resBody });
        }
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- 1. Health Check ---');
  console.log(await get('/api/health'));

  console.log('\n--- 2. Tour Inquiries Validation Error Test ---');
  console.log(await post('/api/bookings', { name: '' }));

  console.log('\n--- 3. Create Valid Tour Booking Inquiry ---');
  const bookingRes = await post('/api/bookings', {
    tour_id: 1,
    tourName: 'DUBAI TOUR',
    name: 'Malli Test',
    email: 'malli@example.com',
    phone: '+91 9876543210',
    travel_date: '2026-10-15',
    travelers: 2,
  });
  console.log(bookingRes);

  const bookingId = bookingRes.data?.bookingId;
  const bookingRef = bookingRes.data?.bookingReference;

  if (bookingId) {
    console.log('\n--- 4. Retrieve Booking by ID ---');
    console.log(await get(`/api/bookings/${bookingId}`));

    console.log('\n--- 5. Retrieve Booking by Reference Code ---');
    console.log(await get(`/api/bookings/${bookingRef}`));

    console.log('\n--- 6. Cancel Booking ---');
    console.log(await post(`/api/bookings/${bookingId}/cancel`, { reason: 'Change of schedule' }));
  }

  console.log('\n--- 7. General Enquiry Test ---');
  const enqRes = await post('/api/enquiries', {
    name: 'Traveler Jane',
    email: 'jane@example.com',
    phone: '+1 555-0199',
    travel_date: '2026-11-20',
    destination: 'Dubai',
    travelers: 2,
    tour_type: 'International Tours',
    message: 'Looking for luxury package options.',
  });
  console.log(enqRes);

  console.log('\n--- 8. Services List ---');
  console.log(await get('/api/services'));

  console.log('\n--- 9. Blogs List ---');
  console.log(await get('/api/blogs'));

  console.log('\n--- 10. Destinations Helper ---');
  console.log(await get('/api/destinations'));
}

runTests();
