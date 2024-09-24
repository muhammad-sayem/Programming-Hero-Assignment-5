// Blog Button and Home Button //
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
});

// ---------------------------------------------------------------------- //

// Donation Part //
const quotaDonate = getInputValue('quota-donate');

const noakhaliDonateButton = document.getElementById('noakhali-donate-btn');
const feniDonateButton = document.getElementById('feni-donate-btn');
const quotaDonateButton = document.getElementById('quota-donate-btn');

const noakhaliAccount = document.getElementById('noakhali-account');
const feniAccount = document.getElementById('feni-account');
const quotaAccount = document.getElementById('quota-account');

// Donate Noakhali //
let newBalance = parseFloat(noakhaliAccount.innerText);
noakhaliDonateButton.addEventListener('click', function(){
    const myBalance = getInnerTextValue('my-balance');
    const noakhaliDonate = getInputValue('noakhali-donate');

    if(isNaN(noakhaliDonate)){
        alert("Invalid Donation Amount");
        document.getElementById('noakhali-donate').value = "";
        return;
    }
    const noakhaliDonateNumber = parseFloat(noakhaliDonate);

    if(noakhaliDonateNumber <= 0 || noakhaliDonateNumber > myBalance || isNaN(noakhaliDonateNumber)){
        alert("Invalid Donation Amount");
        document.getElementById('noakhali-donate').value = "";
        return;
    }

    newBalance = newBalance + noakhaliDonateNumber;
    noakhaliAccount.innerText = newBalance.toFixed(2);

    document.getElementById('my-balance').innerText = (myBalance - noakhaliDonateNumber).toFixed(2);

    const noakhaliHeadline = document.getElementById('noakhali-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4')
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2"> ${noakhaliDonateNumber.toFixed(2)} Taka is donated for ${noakhaliHeadline} </h3>
        <p class="text-gray-500"> Date: ${dt} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('noakhali-donate').value = "";
});

// Donate Feni //
let newBalance2 = parseFloat(feniAccount.innerText);
feniDonateButton.addEventListener('click', function(){
    const feniDonate = getInputValue('feni-donate');
    const myBalance = getInnerTextValue('my-balance');

    if(isNaN(feniDonate)){
        alert("Invalid Donation Amount");
        document.getElementById('feni-donate').value = "";
        return;
    }
    const feniDonateNumber = parseFloat(feniDonate);

    if(feniDonateNumber <= 0 || feniDonateNumber > myBalance || isNaN(feniDonateNumber)){
        alert("Invalid Donation Amount");
        document.getElementById('feni-donate').value = "";
        return;
    }

    newBalance2 = newBalance2 + feniDonateNumber;
    feniAccount.innerText = newBalance2.toFixed(2);

    document.getElementById('my-balance').innerText = (myBalance - feniDonateNumber).toFixed(2);

    const feniHeadline = document.getElementById('feni-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4')
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2"> ${feniDonateNumber.toFixed(2)} Taka is donated for ${feniHeadline} </h3>
        <p class="text-gray-500"> Date: ${dt} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('feni-donate').value = "";
});

// Donate Quota //
let newBalance3 = parseFloat(quotaAccount.innerText);
quotaDonateButton.addEventListener('click', function(){
    const quotaDonate = getInputValue('quota-donate');
    const myBalance = getInnerTextValue('my-balance');

    if(isNaN(quotaDonate)){
        alert("Invalid Donation Amount");
        document.getElementById('quota-donate').value = "";
        return;
    }

    const quotaDonateNumber = parseFloat(quotaDonate);
    if(quotaDonateNumber <= 0 || quotaDonateNumber > myBalance || isNaN(quotaDonateNumber)){
        alert("Invalid Donation Amount");
        document.getElementById('quota-donate').value = "";
        return;
    }

    newBalance3 = newBalance3 + quotaDonateNumber;
    quotaAccount.innerText = newBalance3.toFixed(2);

    document.getElementById('my-balance').innerText = (myBalance - quotaDonateNumber).toFixed(2);

    const quotaHeadline = document.getElementById('quota-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.classList.add('drop-shadow-lg', 'border-2', 'p-8', 'rounded-xl', 'mb-4')
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-2"> ${quotaDonateNumber.toFixed(2)} Taka is donated for ${quotaHeadline} </h3>
        <p class="text-gray-500"> Date: ${dt} </p>
    `;

    document.getElementById('history-section').appendChild(div);
    document.getElementById('my_modal_1').showModal();
    document.getElementById('quota-donate').value = "";
});

 // ------------------------------------------------------------------- //

// Donation and History Button press changing Part //
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

historyButton.addEventListener('click', function(){
    historyButton.classList.add('bg-button-bg');
    donationButton.classList.remove('bg-button-bg');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
});

donationButton.addEventListener('click', function(){
    donationButton.classList.add('bg-button-bg');
    historyButton.classList.remove('bg-button-bg');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
});