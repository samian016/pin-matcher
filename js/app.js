document.getElementById('generateBtn').addEventListener('click',function(){
    const pin = generate();
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    document.getElementById('calc-disp').value='';
    success.style.display='none';
    failed.style.display='none';
    const disp = document.getElementById('display');
    disp.value = pin;
});

function generate(){
    const pin = Math.round(Math.random()*10000);
    if (pin >=1000){
        // console.log(pin);
        return pin;
    }
    else{
        return generate();
    }
}
document.getElementById('calc').addEventListener('click',function (event){
    const disp = document.getElementById('calc-disp');
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    const clickedNumber = event.target.innerText;
    if(isNaN(clickedNumber)){
        if(clickedNumber == 'C'){
            disp.value= '';
            success.style.display='none';
            failed.style.display='none';
        }
    }
    else {
        const prevDispNumber = disp.value;
        const newDisp = prevDispNumber + clickedNumber;
        disp.value = newDisp;
    }
});
function check(){
    const compPin = document.getElementById('display').value;
    const userPin = document.getElementById('calc-disp').value;
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    if(compPin == userPin){
        success.style.display='block';
        failed.style.display='none';
        console.log('done')
    }
    else{
        success.style.display='none';
        failed.style.display='block';
    }
}