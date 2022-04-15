paypal.Buttons({

        // Sets up the transaction when a payment button is clicked

        createOrder: (data, actions) => {

          return actions.order.create({

            purchase_units: [{

              amount: {

                value: '0.1' // Can also reference a variable or function

              }

            }]

          });

        },
        onApprove: (data, actions) => {

          return actions.order.capture().then(function(orderData) {

            // Successful capture! For dev/demo purposes:

            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            const transaction = orderData.purchase_units[0].payments.captures[0];

            alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);


          });

        }
}).render("#paypal-button-container");