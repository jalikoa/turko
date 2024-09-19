function checkXML(){
    if (window.XMLHttpRequest){
        const request = new XMLHttpRequest();
        return request;
        } else {
            if (window.ActiveXObject){
                //Here on active x object another method should be added here for the creating the activex object
                const request = new ActiveXObject('Microsoft.XMLHttp');
                return request;
            }
        }
}
function enc(data){
    return encodeURIComponent(data);
}
const confirmationPopup = document.getElementById('confirmation-popup');
const teacherhandler = 'http://localhost/feeforum/backend/teachersdashboardhandler.php';
function del(){
    if (confirmationPopup.classList.contains('none')){
    confirmationPopup.classList.remove('none');
    }
    if (confirmationPopup.classList.contains('fade')){
    confirmationPopup.classList.remove('fade');
    }
    confirmationPopup.classList.add('visible');
    hidePopup();
}
function hidePopup(){
    console.log('hey');
    setTimeout(()=>{cancelDel()},3000);
}
function cancelDel(){
    if (confirmationPopup.classList.contains('fade')){
        confirmationPopup.classList.remove('fade');
        }
    if (confirmationPopup.classList.contains('alert-success')){
        confirmationPopup.classList.remove('alert-success');
    }
    if (confirmationPopup.classList.contains('alert-warning')){
        confirmationPopup.classList.remove('alert-warning');
    }
    if (confirmationPopup.classList.contains('alert-danger')){
        confirmationPopup.classList.remove('alert-danger');
    }
    if (confirmationPopup.classList.contains('alert-info')){
        confirmationPopup.classList.remove('alert-info');
    }
    if (confirmationPopup.classList.contains('alert-primary')){
         confirmationPopup.classList.remove('alert-primary');
    }
    confirmationPopup.classList.remove('visible');
    confirmationPopup.classList.add('fade');
    confirmationPopup.classList.add('none');
}
function delComplete(){
    confirmationPopup.classList.remove('visible');
    confirmationPopup.classList.add('fade');
    confirmationPopup.classList.add('none');
}

function parse(data){
    return JSON.parse(data);
}
const emailRegexp = /^[^A-Z!@$%^&*]+@[^A-Z!@$%^&*]{2,10}\.[^A-Z!@$%^&*\d]{2,6}$/;
const phoneRegexp = /^[(+2547)?(07)?(01)?(+2541)?][\d]+$/;