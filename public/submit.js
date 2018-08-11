var form = document.getElementById("formProduct");

form.onsubmit = function(e) {
  e.preventDefault();
  var result = document.getElementById("result");
  var url = "/products";

  var digits = checkBox(form.elements["digits"]);
  var numbers = checkBox(form.elements["numbers"]);
  var names = checkBox(form.elements["names"]);

  var sendData = { digits: digits, numbers: numbers, names: names };

  //Using JQuery
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(sendData),
    contentType: "application/json",
    dataType: "json",
    success: function(success) {
      result.innerHTML = JSON.stringify(success, null, 2);
      form.reset();
    },
    error: function(error) {
      result.innerHTML = JSON.stringify(error, null, 2);
    }
  });

  /*
      //Pure JS
      var ajax = new XMLHttpRequest();

      ajax.open("POST", url);
      ajax.setRequestHeader("Content-type", "application/json");
      ajax.send(JSON.stringify(sendData));

      ajax.onreadystatechange = function () {

            if (ajax.readyState == 4 && ajax.status == 200) {
                  var success = JSON.parse(ajax.responseText);
                  result.innerHTML = JSON.stringify(success, null, 2);
                  form.reset();
            } else {
                  var error = ajax.responseText + ajax.status + ' (' + ajax.statusText + ')';
                  result.innerHTML = error;
            }
      }
      */
};

function checkBox(myArray) {
  var checked = [];

  for (var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i].checked) {
      checked.push(myArray[i].value);
    }
  }
  return checked;
}
