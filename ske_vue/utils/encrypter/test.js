const {encrypt} = require('./index');

async function test(){
  const hash = await encrypt('123456');
  console.log(hash);
}

test();