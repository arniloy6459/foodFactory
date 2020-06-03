// error Button
function btn(){
    swal("Working On Process!", "Try Again After Some Times!", "error");
}

// order button
function order(){
    swal("Good job!", "You Order is DONE! Please Enter Your Delivery Address", "success", {
        content: "input",
      })
      .then((value) => {
        swal(`Your Delivery Address ${value}`, "Thank You", "success");
      });
}

function button(){
  swal("Submitted!", "Thank You!", "success");
}