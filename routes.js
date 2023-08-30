// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  .match('/', {
    response: {
      set_response_body: `<a href="/postman-post">Postman POST (body)</a><br><a href="/postman-post-no-body">Postman POST (no body)</a><br><a href="/postman-get">Postman GET</a>`,
      set_done: true,
    },
  })
  .match('/postman-post', {
    edge_function: './functions/postman-post.js',
  })
  .match('/postman-post-no-body', {
    edge_function: './functions/postman-post-no-body.js',
  })
  .match('/postman-get', {
    edge_function: './functions/postman-get.js',
  });
