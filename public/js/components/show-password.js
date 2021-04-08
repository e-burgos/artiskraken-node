$(document).ready(function () {
    $('.form-password-toggle .input-group-text').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            inputGroupText = $this.closest('.form-password-toggle'),
            formPasswordToggleIcon = $this,
            formPasswordToggleInput = inputGroupText.find('input');

        if (formPasswordToggleInput.attr('type') === 'text') {
            formPasswordToggleInput.attr('type', 'password');
            if (feather) {
                formPasswordToggleIcon.find('svg').replaceWith(feather.icons['eye'].toSvg({ class: 'font-small-4' }));
            }
        } else if (formPasswordToggleInput.attr('type') === 'password') {
            formPasswordToggleInput.attr('type', 'text');
            if (feather) {
                formPasswordToggleIcon.find('svg').replaceWith(feather.icons['eye-off'].toSvg({ class: 'font-small-4' }));
            }
        }
    });
})