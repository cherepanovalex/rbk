var onSubmit = function() {
    var data = {
        _token: $('#sending_form').find(".tokenZ2z").val(),
        name: $('#sending_form').find(".name").val(),
        phone: $('#sending_form').find(".phone").val(),
        // lang: $('#sending_form').find(".lang").val(),
        iin: $('#sending_form').find("#iin").val(),
        city: $(".js-city-live").val(),
        cardType: 0, // $("#creditSelect").val(),
        utm_source: new URL(window.location.href).searchParams.get("utm_source"),
        utm_medium: new URL(window.location.href).searchParams.get("utm_medium"),
        utm_campaign: new URL(window.location.href).searchParams.get("utm_campaign"),
        utm_term: new URL(window.location.href).searchParams.get("utm_term"),
        utm_content: new URL(window.location.href).searchParams.get("utm_content"),
    };

    $.ajax({
      type: "POST",
      url: location.origin + "/callback.php",
      data: data,
      error: function(returnval) {
          console.log(returnval);
        toastr.warning('Обновите страницу и попробуйте еще раз!');
      },
      success: function(res) {
        toastr.success('Ваше заявка успешно отправлена!');
        $(".success_sending").show();
        gtag('event', 'отправка формы', { 'event_category': 'заполнение формы'});
        var i = 3;
        var closeWindow = setInterval(function() {
            i--;
            

        }, 1000);
        setTimeout(function() {
            clearInterval(closeWindow);
            $(".success_sending").hide();
        }, 4000);

      },
    });


$(".success_sending").find(".hairline").on("click", function() {
    $(".success_sending").hide();
});
};

function validate(event) {

    event.preventDefault();

    if (!document.getElementById('sending_form').reportValidity()) {
        return;
    }
    else if (document.getElementById('city1').value == 0) {
        toastr.warning("Выберите город");
    }
    // else if (document.getElementById('creditSelect').value == 0) {
    //     toastr.warning("Выберите вид кредита");
    // }
    // else if (document.getElementById('salarySelect').value == 0) {
    //     toastr.warning("Выберите: Ваш доход составляет (ориентировочно)");
    // }
    // else if (document.getElementById('expSelect').value == 0) {
    //     toastr.warning("Выберите: Имеется/имело ли место быть в Вашей кредитной истории просроченная задолженность");
    // }
    else {
        // toastr.info('Запускаем reCAPTCHA');
        // grecaptcha.reset();
        // grecaptcha.execute();
        onSubmit();
    }
}

function onload() {
    var element = document.getElementById('submit');
    element.onclick = validate;
}
