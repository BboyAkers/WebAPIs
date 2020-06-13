const connectDevice = document.querySelector('.connectADevice');
const displayingText = document.querySelector('.displayText');

connectDevice.addEventListener('click', () => {
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  })
    .then(device => device.gatt.connect())
    .then(device => {
      console.log(device)
      displayingText.innerHTML = device
    })
    .catch(error => {
      console.log(error)
      displayingText.innerHTML = error
    });
})