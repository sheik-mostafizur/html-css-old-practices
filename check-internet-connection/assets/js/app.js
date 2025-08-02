const popup = document.querySelector(".check_internet");
const reconnect = document.querySelector("#reconnect");
let isOnline = true,
  intervalId,
  timer = 10;
const checkConnection = async () => {
  try {
    // try to fetch random data from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    isOnline = response.status >= 200 && response.status < 300;
  } catch (error) {
    isOnline = false;
  }
  timer = 10;
  clearInterval(intervalId);
  handlePopup(isOnline);
};

const handlePopup = (status) => {
  const notificationBorder = popup.querySelector(".notification");
  const wifiIcon = popup.querySelector(".icon img");
  if (status) {
    notificationBorder.style.borderColor = "#2ecc71";
    wifiIcon.src = "./assets/icons/wifi-signal.png";
    return setTimeout(() => popup.classList.remove("show"), 2000);
  }

  notificationBorder.style.borderColor = "#ff2d2d";
  wifiIcon.src = "./assets/icons/no-signal.png";
  popup.classList.add("show");

  intervalId = setInterval(() => {
    timer--;
    if (timer === 0) checkConnection();
    const time = popup.querySelector("#time");
    time.innerText = timer;
  }, 1000);
};

setInterval(() => isOnline && checkConnection(), 3000);

reconnect.addEventListener("click", checkConnection);
