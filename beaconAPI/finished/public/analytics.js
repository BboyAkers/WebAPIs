
let dataHistory = []

document.addEventListener('click', (event) => {
  dataHistory.push(
    {
      clickedElement: event.target.outerHTML,
      timestamp: new Date()
    });
})

window.onload = window.onunload = function analytics(event) {
  if (!navigator.sendBeacon) return;

  // Url we are sending the data to
  let url = "http://localhost:8081/analytics";

  // Create the data to send
  const dataHistoryBlob = new Blob([JSON.stringify(dataHistory)], { type: 'application/json' });
  
  navigator.sendBeacon(url, dataHistoryBlob);
};
