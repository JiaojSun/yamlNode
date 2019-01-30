const yaml = require('node-yaml');

yaml.read('a.yaml', (err, data) => {
  const res = JSON.parse(JSON.stringify(data));
  res.environments.dev.url = 'http://baidu.com/';
  yaml.write('./b.yaml', res, (err) => {
    if(err) {
      console.log(err.toString());
    }
  });
});