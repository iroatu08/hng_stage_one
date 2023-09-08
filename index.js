// Getting elements by data-testid attributes
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const myTrack = document.querySelector('[data-testid="myTrack"]');
const githubURL = document.querySelector('[data-testid="githubURL"]');

// Update current day and time to Local time
function updateTime(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true}
    const time = currentDate.toLocaleTimeString([],options);
    
    currentDayOfTheWeek.textContent = dayOfWeek;
    currentUTCTime.textContent = time;
}

updateTime()

//update time every second
setInterval(updateTime,1000);


// setting us datas dynamically here
slackUserName.textContent = "Prince Jayson";
myTrack.textContent = "Frontend Track"
githubURL.href = "https://github.com/iroatu08/hng_stage_one";
githubURL.textContent= "GitHub repository url"
