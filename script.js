async function myFun () {
        var val = document.getElementById("val").value;
        let res= await fetch(`https://api-thirukkural.vercel.app/api?num=${val}`)
        let res1= await res.json();
        for(let i in res1){
        }
        console.log(res1);

        var div=document.createElement("div");
        div.innerHTML=`

        <div class="container" >
        <h4 >${res1.line1}</h4>
        <h4 >${res1.line2}</h4>
        <b>porul:</b>
        <h5>${res1.tam_exp}</h5>
        </div>
          `
         document.body.append(div) 
            
        
}
myFun();