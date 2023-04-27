const visible= []

export async function hideElements() {
const cards= document.getElementsByClassName("cardTech")

console.log(cards)

const hidden= cards.slice(3)
// Object.keys(cards).map(pos =>cards[pos])
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

// how long has
let currentYear= new Date().getFullYear()
let currentMonth= new Date().getMonth()

export const howLongHas = {
   result: (month, year) => {
      if (currentYear === year) {
         return currentMonth - month;

      } else if (currentYear - year === 1) {
         let months = 12 - month + 1 + currentMonth;
         return months;

      } else {
         let days = (currentYear - year + 1) * 12 * 30;
         let decrementDays = (12 - currentMonth + 1 + month) * 30;

         return parseInt((days - decrementDays) / 365);
      }
   },
};