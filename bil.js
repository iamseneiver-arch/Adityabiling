function generatePDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("NeuroBill AI GST Invoice", 10, 10);
  doc.text("GSTIN: 123456789", 10, 20);

  let y = 30;

  items.forEach(i=>{
    let gst = i.price * 0.18;
    doc.text(`${i.name} - ₹${i.price} + GST`, 10, y);
    y += 10;
  });

  doc.text(`Total: ₹${total}`, 10, y+10);

  doc.save("invoice.pdf");
}
