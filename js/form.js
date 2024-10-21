$("#submit").on('click', function () {
    $.ajax({
        url: 'https://rupeeratna.com/server.php',
        type: 'POST',
        data: $("#input_form").serialize(),
        success: function (response) {
            const $select = document.querySelector('#main');
			var $txt="Form Submit &#128077";
            if ($select.value == "HDFC") {
                $("#success").text(`you selcted HDFC`);
            }
            else if ($select.value == "BOI") {
                $("#success").text(`you selected BOI`)
            }
			 else if ($select.value == "SBI") {
                $("#success").text(`you selected SBI`)
            }
            else {
                $("#success").text(`you slected PNB`)

            }
        }
    })
})

