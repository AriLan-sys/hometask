(function () {

    document.addEventListener('click', bugerInit)

    function bugerInit(e) {

        const bugerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.nav__link')

        if (!bugerIcon && !navLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    document.addEventListener('click', modal)

    function modal(e) {

        const gift = e.target.closest('.information__img-control')
        const btn = e.target.closest('.modal__button')
        const close = e.target.closest('.modal__close')

        if (!gift && !btn && !close) return

        if (!document.body.classList.contains('body--opened-modal')) {
            document.body.classList.add('body--opened-modal')
        }
        else {
            document.body.classList.remove('body--opened-modal')
        }
    }
})()