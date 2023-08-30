// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  .match('/', {
    response: {
      set_response_body: `<a href="/postman-post">Postman Post</a><br><a href="/postman-get">Postman Get</a>`,
      set_done  : true,
    }
  })
  .match('/postman-post', {
    edge_function: './functions/postman-post.js',
  }).match('/postman-get', {
    edge_function: './functions/postman-get.js',
  });
