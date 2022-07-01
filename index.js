console.log("Weather Application");
document.body.innerHTML = `
<div class="container">  
            <div><h1>Check Weather⛅</h1></div>      
            <div class="form">
                <input  id="city_name" placeholder="City Name">
                <button class="" id="search">Search</button>
                <button id="mode">Dark Mode</button>
            </div>

    <div class=" main_Container" id="main_Container">
    </div>
    <div>
    </div>
    `;

const search = document.getElementById("search");
search.addEventListener('click', async () => {
    const city=document.getElementById("city_name").value
    localStorage.setItem("city",city);
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b03f650d24856903d3fa295236ac7b52&units=metric`
    const resp= await fetch(url)
    const result=await (resp.json());
    // console.log(result)
    if(result.cod === '404'){
        console.log("Page not found")
        window.location="NotFoundPage.html"
    }
    else{
        main_Container.innerHTML ="";
        Display(result)
        
    }
        
})
    
const Display = async (obj) => {
    main_Container.innerHTML += `
    <div >
        <div class="card ">
            <div class="card-header ">
                     ${obj.name}
                </div>
                <div class="card-body text-center id="">
                    <p class="card-text text-center "> <h3>${obj.main.temp}&degC</h3></p>
                    <p class="card-text text-center "> ${obj.main.temp_min}&degC(min)/ ${obj.main.temp_max}&deg(max)</p>
                    <h4 class="card-text text-center">${obj.weather[0].main}</h4>
                    <p class="card-text text-center">${obj.weather[0].description}</p>
                
                    
                   </div>
        </div> 
  </div>`
  

  
}

const btn = document.getElementById("mode");
const container=document.getElementsByClassName("container");
btn.addEventListener('click',()=>{

    if(btn.innerText==="Dark Mode"){
        document.body.style.backgroundColor="grey";
        btn.innerText="Ligth Mode";

            }else{  

                document.body.style.backgroundColor="white";
                btn.innerText="Dark Mode";
    }

})