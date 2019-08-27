'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BASE_API: '"https://g.d.dacube.cn:998/"',
  {{#multipleServer}}
  DEVELOPMENT_API: '"https://g.d.dacube.cn:998/"',
  TEST_API: '"https://g.t.dacube.cn/"',
  PRODUCTION_API: '"https://g.dacube.cn/"'
  {{/multipleServer}}
}
