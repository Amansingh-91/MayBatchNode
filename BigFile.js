const {writeFileSync} = require('fs');

for(let i =0; i<100000;i++){
    writeFileSync("./myfolder/big.txt",`Hello Friends ${i} \n`,{flag:"a"});
}