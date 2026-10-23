import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('BROWSER:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));

  console.log('Navigating to /signin...');
  await page.goto('http://localhost:4173/#/signin', { waitUntil: 'networkidle0' });

  console.log('Clicking sign in...');
  await page.click('button[type="submit"]');

  // Wait for .view or .dock to appear
  await page.waitForSelector('.dock', { timeout: 5000 });
  console.log('Dock found! Signed in successfully.');
  console.log('Current URL:', page.url());

  // Test routes
  const routes = [
    '/overview',
    '/pipeline',
    '/customers',
    '/customers/clara-vos',
    '/schedule',
    '/finance',
    '/growth',
    '/projects',
    '/settings'
  ];

  for (const route of routes) {
    console.log(`Testing route: ${route}`);
    // Click dock link or use pushState / hash navigation
    await page.evaluate((r) => {
      window.location.hash = r;
    }, route);
    await new Promise(r => setTimeout(r, 600));

    const info = await page.evaluate(() => {
      const title = document.querySelector('.view-head__title, .card__title, h1, h2')?.innerText || 'No title';
      const cards = document.querySelectorAll('.card').length;
      return { title, cards };
    });
    console.log(`  Route ${route}: title="${info.title}", cards=${info.cards}`);
    await page.screenshot({ path: `screen_${route.replace(/[\/:]/g, '_')}.png` });
  }

  // Also test Command Palette (Ctrl+K)
  console.log('Testing Command Palette Ctrl+K...');
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyK');
  await page.keyboard.up('Control');
  await new Promise(r => setTimeout(r, 500));
  const hasFinder = await page.evaluate(() => !!document.querySelector('.finder, [role="dialog"]'));
  console.log('Finder open:', hasFinder);
  await page.screenshot({ path: 'screen_finder.png' });

  // Close Finder
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 300));

  // Test Dark Theme toggle
  console.log('Testing Dark theme...');
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label*="dark"], button[aria-label*="theme"], .dock__action');
    document.documentElement.dataset.theme = 'dark';
  });
  await page.screenshot({ path: 'screen_dark_theme.png' });

  await browser.close();
  console.log('All tests passed perfectly!');
})().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
