// global-setup.ts: login una vez y guardar el estado
const response = await request.post('/api/login', { data: { user, pass } });
const token = (await response.json()).token;
await request.storageState({ path: 'auth.json' });

// playwright.config.ts
// use: { storageState: 'auth.json' }