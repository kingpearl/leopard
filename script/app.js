/**
 * Pearl App
 * Copyright(c) 2012 King Pearl LLC
 * MIT Licensed
 */
!function($) {
    var Pearl = {}

    /**
     * startupImage
     */
    Pearl.startupImage = function () {
        var portrait, landscape, pixelRatio, head, link

        pixelRatio = window.devicePixelRatio
        head = document.getElementsByTagName('head')[0]

        if (navigator.platform === 'iPad') {

            portrait = pixelRatio === 2 ? '/apple-touch-startup-image-1536x2008.png': '/apple-touch-startup-image-768x1004.png'
            landscape = pixelRatio === 2 ? '/apple-touch-startup-image-2048x1496.png': '/apple-touch-startup-image-1024x748.png'

            link = document.createElement('link')
            link.setAttribute('rel', 'apple-touch-startup-image')
            link.setAttribute('media', 'screen and (orientation: portrait)')
            link.setAttribute('href', portrait)
            head.appendChild(link)

            link = document.createElement('link')
            link.setAttribute('rel', 'apple-touch-startup-image')
            link.setAttribute('media', 'screen and (orientation: landscape)')
            link.setAttribute('href', landscape)
            head.appendChild(link)

        }
        else {

            portrait = pixelRatio === 2 ? '/apple-touch-startup-image-640x920.png': '/apple-touch-startup-image-320x460.png'
            portrait = screen.height === 568 ? '/apple-touch-startup-image-640x1096.png' : portrait

            link = document.createElement('link')
            link.setAttribute('rel', 'apple-touch-startup-image')
            link.setAttribute('href', portrait)
            head.appendChild(link)
        }
    }

    window.Pearl = Pearl
}