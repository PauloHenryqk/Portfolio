const visible= []

export async function hideElements() {
const cards= document.getElementsByClassName("cardTech")

console.log(cards)

const hidden= cards.slice(3)

console.log(hidden)

hidden.forEach( (element) => {
    element.setAttribute("hidden")
})

const rows= parseInt(hidden.length / 3)

let start= 3
let end= start + 3

let i= 0
while( i < rows ) {
   console.log(visible)

    visible.push( hidden.slice(start, end) )
    start+= 3
    end+= 3

   i++
}
}
// mostrar elementos 

let show= 0
export function seeMore() {

   visible[show].forEach( (element) => {
      element.removeAttribute("hidden")
   })
   
   show === visible.length ? show = 0 : show++

}