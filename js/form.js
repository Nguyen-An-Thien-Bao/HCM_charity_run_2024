var submitBtn = document.getElementById('formSubmitBtn');

function handleSubmit() {
    //form selector
    var name = document.getElementById('inp-name');
    var email = document.getElementById('inp-email');
    var event = document.getElementById('inp-event');
    var categoryOfEvents = document.querySelectorAll('.categoryOfEnquiry');
    var enquiry = document.getElementById('inp-enquiry');

    if (name.value === '' || email.value === '' || event.value === '' || enquiry.value === '') {
        alert('Please Type In');
        return;
    }

    //toast selector
    var tName = document.getElementById('toastName');
    var tEmail = document.getElementById('toastEmail');
    var tEvent = document.getElementById('toastEvent');
    var tEnquiry = document.getElementById('toastEnquiry');
    var tCategoryOfEvents = document.querySelectorAll('.toastCategoryOfEnquiry');
    var toast = document.getElementById('toast');

    toast.classList.add('activeToast');
    tName.innerText = name.value;
    tEmail.innerText = email.value;
    tEvent.innerText = event.value;
    tEnquiry.innerText = enquiry.value;

    for (let i = 0; i < categoryOfEvents.length; i++) {
        tCategoryOfEvents[i].checked = categoryOfEvents[i].checked;
    }

    setTimeout(() => {
        toast.classList.remove('activeToast');
    }, 3000);
}

submitBtn.addEventListener('click', handleSubmit);
