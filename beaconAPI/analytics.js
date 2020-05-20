

window.onload = window.onunload = function analytics(event) {
  if (!navigator.sendBeacon) return;

  var url = "http://localhost:8081/analytics";
  // Create the data to send
  var data = new Date()

  // Send the beacon
  var status = navigator.sendBeacon(url, data);

  // Log the data and result
  console.log("sendBeacon: URL = ", url, "; data = ", data, "; status = ", status);
};

window.onsubmit = function send_analytics() {
  var data = JSON.stringify({
    time: Date()
  });
  // navigator.sendBeacon("http://localhost:8081/?url=home&time=9000")
  navigator.sendBeacon('http://localhost:8081/', data);
};