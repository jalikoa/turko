const paymentDisp = document.getElementById('paymentoptcontainer');
const paymentForm = document.getElementById('payment-form');
let paymentOpt = '';

paymentForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (paymentOpt == ''){
        const content = `<h5 class="text-danger"> Please ensure that you choose one of the payment options please</h5>
        <nav id="decisions">
            <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
        </nav>`;
        confirmationPopup.classList.add('alert');
        confirmationPopup.classList.add('alert-danger');
        confirmationPopup.innerHTML = content;
        del();
    } else {
        const content = `<h5 class="text-primary">Did you choose ${paymentOpt} as your payment option </h5>
        <nav id="decisions">
            <input type="button" class="del-btn" onclick="cancelDel()" value="No">
             <input type="button" class="cancel-btn" onclick="cancelDel()" value="Yes">
        </nav>`;
        confirmationPopup.classList.add('alert');
        confirmationPopup.classList.add('bg-light');
        confirmationPopup.innerHTML = content;
        del();
    }
});

function populatePaymentMenu(option){
    if(option == 'mpesa'){
        const paymentMenu = ` <label for="mpesaContact">Mpesa contact</label>
                                <div class="ms-3 input-group" id="hasError">
                                    <input type="tel" maxlength="15" class="form-control text-muted" id="mpesaContact" required placeholder="Enter your M-Pesa number">
                                </div>`;
                                paymentDisp.innerHTML = paymentMenu;
                                paymentOpt = 'M-Pesa';
                                return;           
    }
    if (option == 'visa'){
        const paymentMenu = ` <label for="cardNumber">Card number</label>
                                <div class="ms-3 input-group">
                                    <input class="form-control" id="cvv" maxlength="4" required placeholder="CVV">
                                    <input type="number" class="form-control text-muted" maxlength="18" id="cardNumber" required placeholder="Enter card number here">
                                </div> `;
        paymentDisp.innerHTML = paymentMenu;
        paymentOpt ='Bank (visa or master) card';
                                      return; 
    } else {
        alert('Please choos a payment otpion');
    }
}