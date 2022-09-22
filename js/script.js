const effect = document.querySelector('.effect');
const buttons = document.querySelectorAll('.navbar button:not(.plus)');

buttons.forEach(button => {

    button.addEventListener('click', e => {

        const x = e.target.offsetLeft;

        buttons.forEach(btn => {
            btn.classList.remove('active');
        })

        e.target.classList.add('active');

        anime({
            targets: '.effect',
            left: `${x}px`,
            opacity: '1',
            duration: 600
        })

    })

})
