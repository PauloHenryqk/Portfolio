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