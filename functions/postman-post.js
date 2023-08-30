export async function handleHttpRequest(request, context) {
  const response = await fetch('https://postman-echo.com/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: 'foo',
    edgio: {
      origin: 'postman',
    },
  });

  const content = await response.text();

  context.respondWith(
    new Response(content, {
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    })
  );
}
