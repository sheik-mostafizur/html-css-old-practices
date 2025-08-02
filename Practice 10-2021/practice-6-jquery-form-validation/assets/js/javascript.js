$("input#submit").click(function () {
  // ==========Red border customFunction========
  function borderRed() {
    if (email == "") {
      $("input#email").css("border", "1px solid red");
    } else {
      $("input#email").css("border", "1px solid gray");
    }
    if (pass == "") {
      $("input#pass").css("border", "1px solid red");
    } else {
      $("input#pass").css("border", "1px solid gray");
    }
  }
  // ==========Red border customFunction========
  let email = $("input#email").val();
  let pass = $("input#pass").val();
  if (email == "" || pass == "") {
    borderRed();
    $("h1").html('<span style="color:red;">Please Filed input</span>');
    // setTimeout(function () {
    //   $("h1").html(
    //     "<span style='font-size:22px'>Apni thik moto form puron koren</span>"
    //   );
    // }, 5000);
  } else {
    borderRed();
    $("h1").html("<span style='color:green;'>Login successful</span>");
    setTimeout(function () {
      $("h1").html("");
    }, 3000);
  }
});
$("input#pass").keyup(function () {
  let pass = $(this).val();
  if (pass.length >= 1 && pass.length <= 12) {
    $("p").html("<span style='color:green;'>Its Okay</span>");
  } else if (pass.length == 0 || pass.length > 12) {
    $("p").html("<span style='color:red;'>Its less than 12 character</span>");
  }
});

$("input#email").blur(function () {
  let email = $(this).val();
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    $("h1").html("");
  } else {
    $("h1").html("<span style='color:red;'>Your Email Invalid.</span>");
  }
});
