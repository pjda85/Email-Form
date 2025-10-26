function emailSend() {
 const userName = document.getElementById('name').value;
 const phone = document.getElementById('phone').value;
 const email = document.getElementById('email').value;

 const messageBody = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${userName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

 fetch("https://api.elasticemail.com/v2/email/send", {
  method: "POST",
  headers: {
   "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
   apikey: "YOUR_API_KEY_HERE",
   subject: "New Contact Form Submission",
   from: "your_verified_email@example.com",
   to: "your_verified_email@example.com",
   bodyHtml: messageBody,
   isTransactional: true
  })
 })

  .then(response => response.json())
  .then(data => {
   if (data.success) {
    swal("Successful", "Email has been sent successfully!", "success");
   } else {
    swal("Error", "Failed to send email!", "error");
    console.error("Elastic Error:", data.error);
   }
  })
  
  .catch(error => {
   swal("Error", "An unexpected error occurred!", "error");
   console.error("Fetch Error:", error);
  });
        }
   
