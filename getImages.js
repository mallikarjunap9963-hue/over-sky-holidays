const locations = ['kerala', 'kashmir', 'goa beach', 'manali', 'taj mahal', 'mysore palace', 'nainital', 'meghalaya', 'rajasthan', 'darjeeling', 'andaman islands', 'kedarnath temple', 'tirupati temple', 'haridwar'];
async function getImages() {
  for (const loc of locations) {
    try {
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(loc)}&per_page=1`);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        console.log(`${loc}: https://images.unsplash.com/photo-${data.results[0].id}?auto=format&fit=crop&w=1400&q=90`);
      } else {
        console.log(`${loc}: Not found`);
      }
    } catch(e) {
      console.log(`${loc}: Error ${e.message}`);
    }
  }
}
getImages();
