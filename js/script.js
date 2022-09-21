const main = () => {

      const list = document.querySelector("#location")
      const result = document.querySelector("#container-result");

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
                  `<div>The current temperature in ${list.value} is ${json.current.temp_c}
                  <img src="${json.current.condition.icon}" alt="">
                  </div>`
                  
                  // console.log(json.current.temp_c)
            })
            .catch((err)=>{
                  // called if the fetch was not successful
                  console.log(`An error occured.${err}`)
            })
      })
}
main();