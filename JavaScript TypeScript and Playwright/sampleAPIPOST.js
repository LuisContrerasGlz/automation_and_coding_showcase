import { test, expect } from '@playwright/test';

test('crear usuario vía API', async ({ request }) => {
  const response = await request.post('https://api.example.com/users', {
    data: {
      name: 'Juan',
      email: 'juan@test.com'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.name).toBe('Juan');
});
