const endDate = "30 January 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    //convert into days;
    inputs[0].value = Math.floor(diff/3600/24);
    //calculate hours
    inputs[1].value = Math.floor(diff/3600)%24;
    //calculate minutes
    inputs[2].value = Math.floor(diff/60)%60;
    //calculate seconds
    inputs[3].value = Math.floor(diff) %24;
}
//initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)