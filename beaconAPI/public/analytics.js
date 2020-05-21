
let dataHistory = [
  {
    action: '',
    date: Date()
  }
]

document.addEventListener('click', (event) => {
  dataHistory.push(
    {
      action: event.target.outerHTML,
      date: Date()
    });
  console.log(event.target.outerHTML)
})

window.onload = window.onunload = function analytics(event) {
  if (!navigator.sendBeacon) return;

  let url = "http://localhost:8081/analytics";
  // Create the data to send

  const blob = new Blob([JSON.stringify(dataHistory)], { type: 'application/json' });
  navigator.sendBeacon('http://localhost:8081/analytics', blob);
};
