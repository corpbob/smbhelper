child_process = require('child_process');
var express = require('express');
var router = express.Router();
var user = process.env.SSH_USER;
var host = process.env.SSH_HOST;
var password = process.env.SMB_PASSWORD;
var domain = process.env.SMB_DOMAIN;
var uid = process.env.SMB_UID;
var gid = process.env.SMB_GID;
var path = process.env.SMB_PATH;
var mount_path = process.env.MOUNT_PATH;

router.post('/', function(req, res, next) {
  var body = req.body;
   
  var command = 'ssh -v -i /tmp/src/.ssh/id_dsa -o StrictHostKeyChecking=no ' + body.ssh_user + '@' + body.ssh_host + ' sudo mount -t cifs -o username=' + body.smb_user + ',password=' + body.smb_password + ',domain=' + body.smb_domain + ',uid='+ body.smb_uid + ',gid=' + body.smb_gid + ' ' + body.smb_path + ' ' + body.mount_path;

  console.log(command);
  var ssh = child_process.execSync(command);
  res.send(ssh.toString() +  '\n');

});


module.exports = router;
