let btn = document.querySelector(".btn")
let img = document.querySelector(".generated-img")
let temp = document.querySelector(".temporary-text")
let helpLine = document.querySelector(".help-text")
let userInput = document.querySelector(".user-input")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let imgBox = document.querySelector(".img-container")


const domUpdating =function (){
if(userInput.value.length > 1){
  img.src="loading.gif"
  temp.textContent = "Generating please wait couple minutes..."
  helpLine.style.display = "none"
  imgBox.style.height = "1080"
}else {
  alert("please write propmt")
}
}





const API_KEY = "eyJhbGciOiJIUzI1NiIsImtpZCI6IlV6SXJWd1h0dnprLVRvdzlLZWstc0M1akptWXBvX1VaVkxUZlpnMDRlOFUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDExMzUzNDIwMTQ2ODU4NTMwNjI3NCIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIiwiaXNzIjoiYXBpX2tleV9pc3N1ZXIiLCJhdWQiOlsiaHR0cHM6Ly9uZWJpdXMtaW5mZXJlbmNlLmV1LmF1dGgwLmNvbS9hcGkvdjIvIl0sImV4cCI6MTkwNzMwMDE2NCwidXVpZCI6IjM4OTEwZjk2LTk5YTEtNDUzMC05ZjkwLWEwZGZhMmYxZjE4MiIsIm5hbWUiOiJ3YXF0aTIxIiwiZXhwaXJlc19hdCI6IjIwMzAtMDYtMTBUMDU6MzY6MDQrMDAwMCJ9.FY7hNFHoZfBDUfXX4dkamx7N-LpnRU6U_7axLPe0XGY"; // replace with your real key

async function generateImages() {
	const response = await fetch("https://api.studio.nebius.ai/v1/images/generations", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			prompt: userInput.value,
			model: "black-forest-labs/flux-dev",
			response_format: "url",
			response_extension : "png",
			width: 1920,
			height: 1080,
			n: 1 // 👈 Request 3 images
		}),
	});

	const result = await response.json();
  console.log(result.data[0].url)
  temp.textContent = ""
  img.src = `${result.data[0].url}`

}





btn.addEventListener("click", () =>{

  domUpdating()  
  generateImages()
  
  
})

btn1.addEventListener("click", ()=>{
  userInput.value = "A futuristic city floating in clouds"
})

btn2.addEventListener("click", ()=>{
  userInput.value = "Cute robot playing with a kitten"
})

btn3.addEventListener("click", ()=>{
  userInput.value = "Abstract art with vibrant colors"
})

btn4.addEventListener("click", ()=>{
  userInput.value = "Peaceful forest with magical lighting"
})
