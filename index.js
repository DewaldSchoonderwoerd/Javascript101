const fetch = require('node-fetch');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(
        function(response) {
            if (response.status === 404) {
                console.log("Not found!!!!")

                return;
            }

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            console.log(response);
            console.log(response);
            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);

                console.log(typeof data);

                const obj = data;
                console.log(Object.keys(obj));
                console.log(Object.values(obj));
                console.log(Object.values(obj)[0]);

                console.log(Object.getPrototypeOf(obj));
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });