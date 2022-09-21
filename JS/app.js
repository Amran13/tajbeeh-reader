

function Counter(btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const count = document.getElementById('count');
        const countValue = parseInt(count.innerText);
        if (btnId == 'increase-btn') {
            count.innerHTML = countValue + 1;
            const tajbeehName = document.getElementById('tajbeeh-name');
            const tajbeehNameText = tajbeehName.value;
            const tajbeehNumber = document.getElementById('tajbeeh-number');
            const tajbeehNumberValue = tajbeehNumber.value;
            if (count.innerHTML == tajbeehNumberValue) {
                document.getElementById('history').innerText = `
                Congratulaton!!!
                 You Did ${tajbeehNameText} ${tajbeehNumberValue} times
                `
                document.getElementById(btnId).style.display = 'none';
            }
        }
        else if (btnId == 'reset-btn') {
            count.innerHTML = 0;
            window.location.reload();
        }

    })
};

Counter('increase-btn');
Counter('reset-btn');

