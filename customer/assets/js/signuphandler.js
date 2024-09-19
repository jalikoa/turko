const signUpForm = document.getElementById('signup-form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userContact = document.getElementById('phone');
const userLocation = document.getElementById('location');
const userPassword = document.getElementById('password');

signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(emailRegexp.test(userEmail.value) && phoneRegexp.test(userContact.value)){
        if(userPassword.value != confirmPassword.value){
            const content = `<h5 class="text-danger">Sorry the two passwords provided are different </h5>
            <nav id="decisions">
                <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
            </nav>`;
            confirmationPopup.classList.add('alert');
            confirmationPopup.classList.add('alert-danger');
            confirmationPopup.innerHTML = content;
            del()
        } else {
        const data = `signup=${enc('true')}&customername=${enc(userName.value)}&customeremail=${enc(userEmail.value)}&customercontact=${enc(userContact.value)}&customerlocation=${enc(userLocation.value)}&customerpassword=${enc(userPassword.value)}`;
        const regXhr = checkXML();
        regXhr.open('POST','http://localhost/eccormerce/customer/backend/signuphandler.php',true);
        regXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        regXhr.onload = ()=>{
            console.log(regXhr.responseText);
           const response = parse(regXhr.responseText);
           if (response.success){
                const content = `<h5 class="text-success">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-success');
                confirmationPopup.innerHTML = content;
                del()
           } else {
            const content = `<h5 class="text-danger">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-info');
                confirmationPopup.innerHTML = content;
                del()
           }
        };
        regXhr.send(data);
    }} else {
        const content = `<h5 class="text-danger">Please check your email and phone format please</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-info');
                confirmationPopup.innerHTML = content;
                del();
    }
    
});