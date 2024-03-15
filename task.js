document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.square-block');

    // Массив с URL для каждой кнопки
    var urls = [
        'https://1wgtqa.life/casino/list?open=register#01a4',
        'https://refpakrtsb.top/L?tag=d_852201m_22179c_&site=852201&ad=22179',
        'https://t.me/coinstroy',
        'https://kick.com/mellstroy271'
    ];

    buttons.forEach(function(button, index) {
        if(localStorage.getItem('buttonClicked' + index)) {
            button.classList.add('inactive');
            button.disabled = true;
        } else {
            button.addEventListener('click', function() {
                addToBalanceAndDisplay(index + 1);
                // Используем URL из массива urls по индексу кнопки
                window.location.href = urls[index];
                localStorage.setItem('buttonClicked' + index, 'true');
                button.classList.add('inactive');
                button.disabled = true;
            });
        }
    });
});

function addToBalanceAndDisplay(amount) {
    var balance = localStorage.getItem('balance');
    if (balance === null) {
        balance = 0;
    } else {
        balance = parseFloat(balance);
    }
    balance += amount;
    localStorage.setItem('balance', balance);
}
