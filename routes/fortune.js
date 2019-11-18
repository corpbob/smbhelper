child_process = require('child_process');
var express = require('express');
var router = express.Router();
var user = process.env.SSH_USER;
var host = process.env.SSH_HOST;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var fortune = child_process.execSync('fortune');
  //res.send(fortune.toString() + '\n');
  var command = 'ssh -v -o StrictHostKeyChecking=no ' + user + '@' + host + ' ls -l '; 
  console.log(command);
  var ssh = child_process.execSync(command);
  res.send(ssh.toString() +  '\n');

});

module.exports = router;
