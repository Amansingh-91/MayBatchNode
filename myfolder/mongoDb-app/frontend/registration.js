const form =  document.querySelector("#register");
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // const formData = new FormData(form);
    // console.log(formData);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    const data = {
        "email":e.target[0].value,
        "password":e.target[1].value,
    }
    console.log(data);

    fetch("http://localhost:3000/register",{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res =>{
        return res.json();
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
})

console.log();