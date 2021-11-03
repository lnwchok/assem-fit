import { computed, unref } from 'vue'

// const mapHeaderBlock = (arr) => {
//   try {
//     var des = arr.map(() => 0)

//     const checkValueCol = (a) => {
//       var res = a.map((e, i) => (e !== '' ? i : '')).filter((e) => e !== '')
//       let r = []
//       for (let j = 0; j < res.length; j++) {
//         if (j === res.length) {
//           r.push({ pos: res[j], length: a.slice(res[j]).length })
//         } else
//           r.push({ pos: res[j], length: a.slice(res[j], res[j + 1]).length })
//       }
//       return r
//     }

//     checkValueCol(arr).forEach((c) => {
//       des[c.pos] = c.length
//     })
//   } catch (e) {
//     console.log(e)
//   }
//   return des
// }

const split2 = (arr, splitter) => {
   return arr
      .split(splitter)
      .map(Function.prototype.call, String.prototype.trim)
      .filter((e) => e !== '')
}

const modTable = (h, b) => {
   const hdr1 = h.split(/\W/g).filter((e) => e !== '')
   const hdr2 = split2(h, '|').map((e) => {
      if (/\W+/g.test(e)) {
         let k = split2(e, '<').map((e) => hdr1.findIndex((f) => f === e))
         return k.join('<')
      } else return hdr1.findIndex((f) => f === e)
   })
   const hmod = split2(h, '|').map((e) => {
      if (e.includes('<')) {
         let ff = e.split('<')
         return `${ff[0]}`
      } else return e
   })

   const bmod = b.map((e) => {
      let y = hdr2.map((f) => {
         if (Number.isInteger(f)) {
            return e[f]
         } else {
            let ff = f.split('<')
            return `${e[ff[0]]}<br/><i>${e[ff[1]]}</i>`
         }
      })
      return y
   })

   return { header: hmod, body: bmod }
}

const modHeader = (h, b) => {
   return modTable(h, b).header
}

const modBody = (h, b) => {
   return modTable(h, b).body
}

export default function (datatable, headertable, customheader) {
   // datatable :: Vue 3 - reactive object
   // customHeader :: Vue 3 - reactive object
   const isCustomheader =
      typeof unref(customheader) === 'undefined' ? false : true

   const bodiesValue = computed(() =>
      isCustomheader
         ? modBody(customheader.value, datatable.value)
         : datatable.value
   )

   const headersValue = computed(() =>
      isCustomheader
         ? modHeader(customheader.value, datatable.value)
         : headertable.value
   )

   return {
      headersValue,
      bodiesValue
   }
}
