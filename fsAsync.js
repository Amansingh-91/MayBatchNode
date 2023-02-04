const {readFile,writeFile} =  require("fs");


readFile("./myfolder/first.txt","utf8",(err,result)=>{

    if(err){
        console.log(err);
        return
    }
    console.log(result);
    const first = result;
    readFile("./myfolder/second.txt","utf8",(err,result)=>{

        if(err){
            console.log(err);
            return
        }
        console.log(result);
        const second = result;

        writeFile("./myfolder/asyncResult.txt",`${first} ${second}`,{flag:"a"},(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})