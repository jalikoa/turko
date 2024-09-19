const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchInput');

function placeOrder(productId,customerId){
    const orderXhr = checkXML();
    orderXhr.open('POST','http://localhost/eccormerce/customer/backend/orderhandler.php',true);
    orderXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    const data = `orderstarted=${enc('true')}&customerid=${enc(customerId)}&productid=${enc(productId)}`;
    orderXhr.onload = ()=>{
        if (orderXhr.status === 200){
            console.log(orderXhr.responseText);
            const response = parse(orderXhr.responseText);
            if (response.success){
                window.location.href = 'pay.html?product_id=2&customer_id=56';
            } else {
                const content = `<h5 class="text-danger">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-info');
                confirmationPopup.innerHTML = content;
                del();
            }
        } else {
            alert('There was an error that occurred while trying tocreate you order');
        }
    }
    orderXhr.send(data);
}

function placeCart(productId,customerId){
    if (!customerId){
        return;
    }
    const cartXhr = checkXML();
    const data = `addcart=${enc(true)}&customerid=${enc(customerId)}&productid=${enc(productId)}`;
    cartXhr.open('POST','http://localhost/eccormerce/customer/backend/carthandler.php',true); 
    cartXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  
    cartXhr.onload = ()=>{
        console.log(cartXhr.responseText)
        if (cartXhr.status === 200){
            const response = parse(cartXhr.responseText);
            if (response.success){
                const content = `<h5 class="text-success">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-success');
                confirmationPopup.innerHTML = content;
                del();
            } else {
                const content = `<h5 class="text-danger">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('alert-info');
                confirmationPopup.innerHTML = content;
                del();
            }
        } else {
            alert('There was a technical erro while trying to parse your request please try again later');
        }
    } 
    cartXhr.send(data);
}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = `searchproduct=${enc('true')}&productname=${enc(searchInput.value)}`;
    const searchXhr = checkXML();
    searchXhr.open('POST','http://localhost/eccormerce/customer/backend/searchproducthandler.php',true);
    searchXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    searchXhr.onload = ()=>{
        console.log(searchXhr.responseText);
        if (searchXhr.status === 200){
            const response = parse(searchXhr.responseText);
            if (response.success){

            } else{
                const content = `<h5 class="text-muted">${response.message}</h5>
                <nav id="decisions">
                    <input type="button" class="cancel-btn" onclick="cancelDel()" value="Ok">
                </nav>`;
                confirmationPopup.classList.add('alert');
                confirmationPopup.classList.add('bg-light');
                confirmationPopup.innerHTML = content;
                del();
            }
        } else {
            alert('Sorry it seems like there was a problem while trying to fetch the results that you requested for pllease try again later');
        }
    }
    searchXhr.send(data);
});
 // Initialize tooltips
 document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (element) {
    new bootstrap.Tooltip(element);
  });