const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e2a63f9426mshd52e6e33d2a87e2p14e8c7jsnadc2c4db52c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		
	}
};
const getWeather =(city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
	.then(response => response.json())
	.then((response) => {
	


		console.log(response)
		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		temp3.innerHTML = response.temp
		temp4.innerHTML = response.temp
		temp5.innerHTML = response.temp
		temp6.innerHTML = response.temp
		temp7.innerHTML = response.temp
		temp8.innerHTML = response.temp
		temp9.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity
		humidity4.innerHTML = response.humidity
		humidity5.innerHTML = response.humidity
		humidity6.innerHTML = response.humidity
		humidity7.innerHTML = response.humidity
		humidity8.innerHTML = response.humidity
		humidity9.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		min_temp1.innerHTML = response.min_temp
		min_temp2.innerHTML = response.min_temp
		min_temp3.innerHTML = response.min_temp
		min_temp4.innerHTML = response.min_temp		
		min_temp5.innerHTML = response.min_temp
		min_temp6.innerHTML = response.min_temp
		min_temp7.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		max_temp1.innerHTML = response.max_temp
		max_temp2.innerHTML = response.max_temp
		max_temp3.innerHTML = response.max_temp
		max_temp4.innerHTML = response.max_temp
		max_temp5.innerHTML = response.max_temp
		max_temp6.innerHTML = response.max_temp
		max_temp7.innerHTML = response.max_temp
		wind_speed.innerHTML =   response.wind_speed
		wind_speed2.innerHTML =   response.wind_speed
		wind_degrees.innerHTML = response.wind_degree
		sunrise.innerHTML = response.sunrise
		sunrise1.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		sunset1.innerHTML = response.sunset
	

	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Bangalore")