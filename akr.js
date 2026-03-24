function generateQR(){
  let amount = total;
  let upi = `upi://pay?pa=yourupi@upi&pn=Shop&am=${amount}`;

  document.getElementById("qr").src =
   "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(upi);
}
