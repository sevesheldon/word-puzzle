function thing(randomArray) {randomArray.forEach(function(phraseChop, i) {
    //console.log(i);
    if (phraseChop === "a" || phraseChop === "e" || phraseChop === "i" || phraseChop === "o" || phraseChop === "u") {
      randomArray[i] = "-";
      //console.log(phraseChop);
    }

  });
}

$(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var phrase = $("#phrase").val();
    var phraseChops = phrase.split("");

    console.log(phrase);
    console.log(typeof(phrase));
    console.log(phraseChops);
    console.log(typeof(phraseChops));

    if (phrase) {
      $("form#user-input").fadeOut();
      $("#answer").fadeIn();

      thing(phraseChops);

      var finalChop = phraseChops.join('');
      $("#answer").append("<h3>" + finalChop + "</h3>");

      console.log(finalChop);

    } else {
      alert("Please enter a sentence or phrase!");
    }

    console.log();

  });

});
