var router = require('../router');
const mysql = require('../mysql/index')

router.get('/', function(next) {
  let data = await mysql.query()
  this.body = {
    message:'',
    code:200,
    data:data || 'index'
  }
});

router.post('/test', function (next) {
  this.body = {
    message:'',
    code:200,,
    data:'test'
  }
});

module.exports = router;
