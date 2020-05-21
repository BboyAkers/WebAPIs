

window.onload = window.onunload = function analytics(event) {
  if (!navigator.sendBeacon) return;

  let url = "http://localhost:8081/analytics";
  // Create the data to send
  let data = {
    date: Date()
  }
  navigator.sendBeacon('http://localhost:8081/analytics', JSON.stringify(data));
};
