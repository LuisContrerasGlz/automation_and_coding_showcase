/*
Enfoque a explicar antes de escribir código
Hacer un POST al endpoint de creación de clientes con un payload válido.
Validar el status code (201 Created, no solo 200).
Validar que el body de la respuesta contenga los datos enviados (y que venga un id generado).
Idealmente, hacer una segunda llamada (GET /clients/{id}) para confirmar que el cliente realmente persiste, no solo que la API respondió bien.
Bonus: limpieza (borrar el cliente creado) para no ensuciar datos de prueba.
*/
/*
import { test, expect } from '@playwright/test';

test.describe('API - Clientes', () => {
  const baseURL = 'https://api.example.com';
  let createdClientId: string;

  test('debe crear un cliente correctamente', async ({ request }) => {
    // 1. Datos del nuevo cliente
    const newClient = {
      name: 'Juan Pérez',
      email: 'juan.perez@test.com',
      phone: '5512345678'
    };

    // 2. Crear el cliente vía POST
    const response = await request.post(`${baseURL}/clients`, {
      data: newClient,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });

    // 3. Validar status code
    expect(response.status()).toBe(201);

    // 4. Validar el body de la respuesta
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.name).toBe(newClient.name);
    expect(body.email).toBe(newClient.email);
    expect(body.phone).toBe(newClient.phone);

    createdClientId = body.id;

    // 5. Validar que el cliente realmente persiste (GET)
    const getResponse = await request.get(`${baseURL}/clients/${createdClientId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });

    expect(getResponse.status()).toBe(200);
    const getBody = await getResponse.json();
    expect(getBody.email).toBe(newClient.email);
  });

  // 6. Limpieza - opcional pero recomendable
  test.afterAll(async ({ request }) => {
    if (createdClientId) {
      await request.delete(`${baseURL}/clients/${createdClientId}`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      });
    }
  });
});

*/