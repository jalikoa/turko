const loginForm = document.getElementById('login-form');
const emailOrContact = document.getElementById('phoneOrEmail');
const password = document.getElementById('password');

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(emailRegexp.test(emailOrContact.value || phoneRegexp.test(emailOrContact.value))){
        const data = `login=${enc('true')}&customeremailorcontact=${enc(emailOrContact.value)}&customerpassword=${password.value}`;
        const logXhr = checkXML();
        logXhr.open('POST','http://localhost/eccormerce/customer/backend/loginhandler.php',true);
        logXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        logXhr.onload = ()=>{
            const response = parse(logXhr.responseText);
            if (response.success){
                 const content = `<h5 class="text-success">${response.message}</h5>
                 <nav id="decisions">
                     <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                 </nav>`;
                 confirmationPopup.classList.add('alert');
                 confirmationPopup.classList.add('alert-success');
                 confirmationPopup.innerHTML = content;
                 del();
                 setTimeout(()=>{cancelDel()},800);
                 const id = '9';
                 setTimeout(()=>{window.location.href= `index.html?customer_id=${enc(id)}`;},1500);
            } else {
             const content = `<h5 class="text-danger">${response.message}</h5>
                 <nav id="decisions">
                     <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                 </nav>`;
                 confirmationPopup.classList.add('alert');
                 confirmationPopup.classList.add('alert-danger');
                 confirmationPopup.innerHTML = content;
                 del()
            }
        }
        logXhr.send(data);
    }
});