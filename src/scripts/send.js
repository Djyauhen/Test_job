$(document).ready(function () {
    const modalWindow = $('#modal');
    const reserveBtn = $('#reserveBtn');
    const closeBtn = $('#close');
    const sendReserve = $('#sendMessage');
    const sendQuestion = $('#sendQuestion');
    let timeReserve = $('#timeReserve');
    let nameReserve = $('#nameReserve');
    let numberReserve = $('#numberReserve');
    let nameUser = $('#name');
    let emailUser = $('#email');
    let requestUser = $('#request');

    reserveBtn.click(function () {
        $(modalWindow).css({
            display: 'flex'
        })
    })

    closeBtn.click(function () {
        $(modalWindow).css({
            display: 'none'
        })
    })


    sendReserve.click(function () {
        if (!timeReserve.val() && !nameReserve.val() && !numberReserve.val()) {
            alert("Заполните все поля!");
            return;
        }

        $.ajax({
            method: "POST",
            url: 'http://testologia.site/checkout',
            data: {product: timeReserve.val(), name: nameReserve.val(), phone: numberReserve.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    timeReserve.val('');
                    nameReserve.val('');
                    numberReserve.val('');
                } else {
                    timeReserve.val('');
                    nameReserve.val('');
                    numberReserve.val('');
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
                console.log(msg);
            })
            .fail(function () {
                alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
            })
    })

    sendQuestion.click(function () {
        if (!nameUser.val() && !emailUser.val() && !requestUser.val()) {
            alert("Заполните все поля!");
            return;
        }

        $.ajax({
            method: "POST",
            url: 'http://testologia.site/checkout',
            data: {product: nameUser.val(), name: emailUser.val(), phone: requestUser.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    nameUser.val('');
                    emailUser.val('');
                    requestUser.val('');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
                console.log(msg);
            })
            .fail(function () {
                alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
            })
    })
})