
import React from 'react';
// import Razorpay from 'razorpay';
function loadScript(src){
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = src;
        script.onload = () => {
            resolve(true)
        }
        script.onerror = ()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const Payment = () => {
    // async function displayRazorpay(){

    //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    //     if(!res){
    //         alert('Network Error!')
    //         return
    //     }

    //     const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) => 
    //         t.json()
    //     )
    //     console.log(data)
    //     var options = {
    //         "key": "rzp_test_1xLFW3XMUr7klD", 
    //         "amount": "50000", 
    //         "currency": "INR",
    //         "name": "Better Tomorrow",
    //         "description": "Test Transaction",
    //         "image": "https://example.com/your_logo",
    //         // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "handler": function (response){
    //             alert(response.razorpay_payment_id);
    //             alert(response.razorpay_order_id);
    //             alert(response.razorpay_signature)
    //         },
    //     };
    //     var rzp1 = new Razorpay(options);
    //     rzp1.on('payment.failed', function (response){
    //         alert(response.error.code);
    //         alert(response.error.description);
    //         alert(response.error.source);
    //         alert(response.error.step);
    //         alert(response.error.reason);
    //         alert(response.error.metadata.order_id);
    //         alert(response.error.metadata.payment_id);
    //     });
    //     document.getElementById('rzp-button1').onclick = function(e){
    //         rzp1.open();
    //         e.preventDefault();
    //     }
    //     const paymentObject = new window.Razorpay(options)
    //     paymentObject.open()
    // }
    function displayRazorpay() {
        
    }
  return (
    <div className="payment">
        <div className="BeautyBlock"></div>
        <form>
            <table className="Details">
                <tr>
                    <td>Name:</td>
                    <td><input type="text" id="fname" name="fname" /></td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td><input type="tel" id="phone" name="phone" /></td>
                </tr>
            </table>
            <br />
            <div className='btn'>
                <a className='App-link' onClick={displayRazorpay} target="_blank" rel='noopener noreferrer' id='rzp-button1'>
                    Donate 500rs
                </a>

            </div>
        </form>

    </div>
  )
}

export default Payment;