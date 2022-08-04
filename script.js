const img = document.querySelector("img-profile")
//const data = document.querySelector("")
const btnRandom = document.querySelector("btn-random") 
async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");

}

btnRandom.onclick = async () => { 

  btnRandom.innerText = "Loading..." 
  btnRandom.disabled = true 

  const resp = await axios.get("https://randomuser.me/api/") 
  
  img.src = resp.data.message

}
