// declare our constants

const buttons = document.querySelectorAll('.ripple')

// The idea below is to calculate where in the button the click has occurred

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // The below to figure out the click location
        const x = e.clientX
        const y = e.clientY

        // The below to figure out the button positioning
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // The below to give the area of the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // Then we create a circle which is a span
        const circle = document.createElement('span')

        // add the class circle to the span
        circle.classList.add('circle')

        // and now set the boundaries of the circle
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        // then add it to the button
        this.appendChild(circle)

        // and after a set time, remove it, otherwise you will create very many circles 
        setTimeout(() => circle.remove(), 500)
    })
})
