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
})()