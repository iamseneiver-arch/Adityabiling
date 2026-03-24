async function fetchProduct(barcode){
  let doc = await db.collection("products").doc(barcode).get();

  if(doc.exists){
    let data = doc.data();
    document.getElementById("name").value = data.name;
    document.getElementById("price").value = data.price;
  } else {
    alert("Product not found, add manually");
  }
}
