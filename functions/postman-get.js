export async function handleHttpRequest(request, context) {
  const response = await fetch('https://postman-echo.com/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    edgio: {
      origin: 'postman',
    },
  });

  const content = await response.json();

  context.respondWith(
    new Response(JSON.stringify(content), {
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    })
  );
}
