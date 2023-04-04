export const images= [
   "url('./assets/images/background-image1.jpg')",
   "url('./assets/images/background-image2.jpg')",
   "url('./assets/images/background-image3.jpg')",
   "url('./assets/images/background-image4.jpg')",
]

export const sideBarSet= {
    open: function() {
       let aside= document.querySelector('aside')
       aside.classList.add('sideBar')
    },
    close: function() {
       let aside= document.querySelector('aside')
       aside.classList.remove('sideBar')
    },
 }