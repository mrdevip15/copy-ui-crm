import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  const title = await page.title();
  console.log('Page title:', title);

  // Take screenshot
  await page.screenshot({ path: 'local_preview.png' });
  console.log('Screenshot saved to local_preview.png');

  // Check URL
  console.log('Current URL:', page.url());

  // Check body content or root
  const rootHTML = await page.evaluate(() => document.getElementById('root')?.innerHTML.slice(0, 300));
  console.log('Root HTML preview:', rootHTML);

  await browser.close();
  console.log('Done!');
})().catch(err => {
  console.error('Script error:', err);
  process.exit(1);
});
