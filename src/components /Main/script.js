// arrows
export const arrows= {
   scrollLeft: () => {
      let left= document.querySelector("#containerProject")
      console.log(left)
      left.scrollLeft-= 500 
   },
   scrollRight:() => {
      let right= document.querySelector("#containerProject")
      right.scrollLeft+= 500
   }
}
