export async function handleHttpRequest(request, context) {
  const response = await fetch('https://postman-echo.com/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ edgio: 'posting from edgio' }),
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
