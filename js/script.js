const main = () => {

      const list = document.querySelector("#location")
      const result = document.querySelector("#container-result");
      const resultItems = document.querySelector("#container-result").children;
      console.log(resultItems)
      const innerDiv = document.querySelector("#container-result > div");

      list.addEventListener("change",()=>{
            // console.log(list.value);
            const endPoint = `http://api.weatherapi.com/v1/current.json?key=2b69e1229bd549a6a97152216222109&q=${list.value}&aqi=no`

            // fetch is a global function built into every browser that allows you to send HTTP requests
            fetch(endPoint)
            .then((res)=>{
                  // called if the fetch was successful
                  return res.json();

            })
            .then((json)=>{
                  
                  result.innerHTML = 
                  `<h2>${list.value}, ${json.location.country}</h2
                  <div>
                        <div class="degrees">
                        ${json.current.temp_c}&#176
                        </div>
                        <img src="${json.current.condition.icon}" alt="">
                  </div>
                 `

            })
            .catch((err)=>{
                  // called if the fetch was not successful
                  console.log(`An error occured.${err}`)
            })
      })
}
main();