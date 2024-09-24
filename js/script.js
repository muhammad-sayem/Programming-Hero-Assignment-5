// Blog Button and Home Button //
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
});


// document.getElementById('navbar-container').addEventListener('scroll', function(){
//     document.getElementById('navbar-container').classList.remove('bg-navbar-bg');
// })

// ---------------------------------------------------------------------- //
// Donation Part //
const quotaDonate = getInputValue('quota-donate');

const noakhaliDonateButton = document.getElementById('noakhali-donate-btn');
const feniDonateButton = document.getElementById('feni-donate-btn');
const quotaDonateButton = document.getElementById('quota-donate-btn');

const noakhaliAccount = document.getElementById('noakhali-account');
const feniAccount = document.getElementById('feni-account');
const quotaAccount = document.getElementById('quota-account');

let newBalance = parseFloat(noakhaliAccount.innerText);
noakhaliDonateButton.addEventListener('click', function(){
    const myBalance = getInnerTextValue('my-balance');
    const noakhaliDonate = getInputValue('noakhali-donate');
    newBalance = newBalance + noakhaliDonate;
    noakhaliAccount.innerText = newBalance;

    document.getElementById('my-balance').innerText = myBalance - noakhaliDonate;

    const noakhaliHeadline = document.getElementById('noakhali-headline').innerText;
    const dt = new Date();

    const div = document.createElement('div');
    div.innerHTML = `
        <h3> ${noakhaliDonate} Taka is donated for ${noakhaliHeadline} </h3>
        <h3> ${dt} </h3>
    `;

    document.getElementById('history-section').appendChild(div);


});


let newBalance2 = parseFloat(feniAccount.innerText);
feniDonateButton.addEventListener('click', function(){
    const myBalance = getInnerTextValue('my-balance');
    const feniDonate = getInputValue('feni-donate');
    newBalance2 = newBalance2 + feniDonate;
    feniAccount.innerText = newBalance2;

    document.getElementById('my-balance').innerText = myBalance - feniDonate;
});

let newBalance3 = parseFloat(quotaAccount.innerText);
quotaDonateButton.addEventListener('click', function(){
    const myBalance = getInnerTextValue('my-balance');
    const quotaDonate = getInputValue('quota-donate');
    newBalance3 = newBalance3 + quotaDonate;
    quotaAccount.innerText = newBalance3;

    document.getElementById('my-balance').innerText = myBalance - quotaDonate;
});

 // ------------------------------------------------------------------- //

// History Part //