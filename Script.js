async function askAI(){
  let question = document.getElementById("aiInput").value;

  let response = "💡 Suggestion: ";

  if(question.includes("increase sales")){
    response += "Offer combo discounts + WhatsApp marketing!";
  }
  else if(question.includes("low stock")){
    response += "Restock fast moving items like shirts & jeans.";
  }
  else{
    response += "Track daily sales & optimize pricing.";
  }

  document.getElementById("aiResponse").innerText = response;
}
