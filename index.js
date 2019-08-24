
var Iyzipay = require('./lib/Iyzipay'),
  options = require('./samples/data/options');
// express'i dahil edelim,
const app = require('express')()

app.get('/bune', (req, res) => {
  var iyzipay = new Iyzipay(options);

  var request = {
    checkoutFormToken: 'b2390036-9141-4260-9c6a-7da167cdfc6c'
  };

  iyzipay.subscriptionCheckoutForm.retrieve(request, function (err, result) {
    console.log(err, result);
   
  });

})


app.get('/retrive', (req, res) => {
  var iyzipay = new Iyzipay(options);

  iyzipay.checkoutForm.retrieve({
    locale: Iyzipay.LOCALE.TR,
    conversationId: '3ae52227-1094-4091-b678-1a7206e45a49',
    token: 'b2390036-9141-4260-9c6a-7da167cdfc6c'
  }, function (err, result) {
    console.log(result);
  });

})

// HTTP GET isteğine JSON tipinde yanıt verelim,
app.get('/basla', (req, res) => {
  var iyzipay = new Iyzipay(options);

  var request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    callbackUrl: 'callbackUrl',
    pricingPlanReferenceCode: '19ec521a-ef5a-493a-b658-e87af717e8eb',
    subscriptionInitialStatus: Iyzipay.SUBSCRIPTION_INITIAL_STATUS.ACTIVE,
    customer: {
      name: 'name',
      surname: 'surname',
      identityNumber: '11111111111',
      email: 'test123@test.com',
      gsmNumber: '+9005555555555',
      billingAddress: {
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        zipCode: '34742'
      },
      shippingAddress: {
        contactName: 'Jane Doe',
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
        zipCode: '34742'
      }
    }
  };

  iyzipay.subscriptionCheckoutForm.initialize(request, function (err, result) {
    console.log('selam');
 
   console.log(result.checkoutFormContent);
  });



})

// Uygulama 3000 portundan çalışacak.
app.listen(80)
