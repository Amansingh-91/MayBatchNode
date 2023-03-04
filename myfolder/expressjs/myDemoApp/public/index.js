const form = document.getElementById("myform");

form.addEventListener("submit",async(e)=>{

    e.preventDefault();
    let data ={};
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    data.name = e.target[0].value;
    data.age = e.target[1].value;

    const response = await fetch("/api/people",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
})