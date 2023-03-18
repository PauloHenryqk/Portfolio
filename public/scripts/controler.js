let imgs= [
        "url('/assets/imagens/background-image1.jpg')",
        'url("/assets/imagens/background-image2.jpg")',
        "url('/assets/imagens/background-image3.jpg')",
        "url('/assets/imagens/background-image4.jpg')",
    ]

let pictureStatus= {
    clicked: false,
       zoom: function() {
       picture.classList.remove('removeZoom')
    },
       removeZoom: function() {
       picture.classList.remove('zoom')
    },
}

function isClicked() {
    return pictureStatus.clicked == true
}

let sideBarSet= {
   open: function() {
      aside.classList.add('sideBar')
   },
   close: function() {
      aside.classList.remove('sideBar')
   },
}

let carouselScroll= {
   left: function() {
      carousel.scrollLeft -= 500
   },
   right: function() {
      carousel.scrollLeft += 500
   },
}