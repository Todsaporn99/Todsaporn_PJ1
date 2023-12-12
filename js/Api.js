function myFunction() {
    fetch("https://catfact.ninja/fact")
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        let txt = "";
          for (let x in data) {
            txt += data[x] + " ";
          document.getElementById("demo2").innerHTML = txt;
          };
      
        return data;
      })  
}

  document.addEventListener('DOMContentLoaded', function () {
            // Function to fetch and display a random cat image
            function fetchRandomCatImage() {
                // API endpoint for random cat image
                const apiUrl = 'https://api.thecatapi.com/v1/images/search';

                // Fetch data from the API
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        // Extract the image URL from the response
                        const imageUrl = data[0].url;

                        // Display the image on the page
                        const catImageElement = document.getElementById('catImage');
                        catImageElement.src = imageUrl;
                    })
                    .catch(error => console.error('Error fetching cat image:', error));
            }

            // Initial load of a random cat image
            fetchRandomCatImage();

            // Add click event listener to the button
            const loadCatButton = document.getElementById('loadCatButton');
            loadCatButton.addEventListener('click', fetchRandomCatImage);
        });

         //RateCoin realtime//
function displayPrices(rates) {
  const currencies = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];
  const pricesHtml = `
    <br>
    <ul class='list-group list-group-numbered'>${currencies.map(currency => `<li class='list-group-item'>${currency} : ${rates[currency] || 'N/A'}</li>`).join('')}</ul>
`;
  document.getElementById('prices').innerHTML = pricesHtml;
}
function handleFetchError(error) {
  console.error('Error fetching data:', error);
  alert('Error fetching data. Please try again.');
}
function displayLastUpdateTime() {
  const updateTimeDiv = document.getElementById('lastUpdateTime');
  const currentTime = new Date().toLocaleTimeString();
  updateTimeDiv.innerHTML = `<label>Last Update Time: ${currentTime}</label>`;
}

fetchPrices();
setInterval(fetchPrices, 1000);
async function fetchPrices() {
  try {
    const response = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USDT');
    const data = await response.json();
    displayPrices(data.data.rates);
    displayLastUpdateTime();
  } catch (error) {
    handleFetchError(error);
  }
}
