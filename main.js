const nav = document.querySelector('.navegation')
const topNav = nav.offsetTop

window.onscroll = function () {
  fixaTop()
}

function fixaTop(){
  if(window.pageYOffset >= topNav){
    nav.classList.add('fixa')
  }else{
    nav.classList.remove('fixa')
  }
}

let c = (el)=>document.querySelector(el)
document.querySelectorAll('.navegation a').forEach((item,index)=>{
  
  item.addEventListener('click',(e)=>{
    e.preventDefault()
     
      if(index == 0 ){
      c('.area').innerHTML = ''
      c('.zero').classList.remove('active')
      c('.beers').classList.remove('active')
      c('.aperitivos').classList.remove('active')
      c('.pasteis').classList.remove('active')
      e.target.classList.add('active')
      itemJson.map((item, index) => {
      
        let empItem = document.querySelector('.models .item-content').cloneNode(true)
      
        
        empItem.querySelector('.item--name span').innerHTML = item.span
        empItem.querySelector('.item--desc').innerHTML = item.description
        empItem.querySelector('.item--img img').src = item.img
        empItem.querySelector('.item--price').innerHTML = `R$: ${item.preço.toFixed('2')}`
    
        document.querySelector('.area').append(empItem)
        
      })
      
    } else if (index == 3) {
      c('.area').innerHTML = ''
      c('.zero').classList.remove('active')
      c('.lanches').classList.remove('active')
      c('.aperitivos').classList.remove('active')
      c('.pasteis').classList.remove('active')
     e.target.classList.add('active')
      
      beerJson.map((item,index)=>{
        let beerItem = document.querySelector('.models2 .item--content2').cloneNode(true)
        
        
        beerItem.querySelector('.item--name2 span').innerHTML = item.span 
        beerItem.querySelector('.item--name2 h5').innerHTML = item.qt
        beerItem.querySelector('.item--price2').innerHTML = `R$: ${item.preço.toFixed(2)}`
        
        beerItem.querySelector('.item--img2 img').src = item.img
         
       
    
           document.querySelector('.area').append(beerItem)
      })
    } else if (index == 1) {
      
            c('.area').innerHTML = ''
            c('.zero').classList.remove('active')
            c('.lanches').classList.remove('active')
            c('.beers').classList.remove('active')
            c('.pasteis').classList.remove('active')
            e.target.classList.add('active')
      
      
        apejson.map((item,index)=>{
        let apeItem = document.querySelector('.models3 .item--content3').cloneNode(true)
        
        
        apeItem.querySelector('.item--name3 p').innerHTML = item.nome
        apeItem.querySelector('.item--name3 span').innerHTML =  item.span
        apeItem.querySelector('.item--desc3').innerHTML = item.desc
        apeItem.querySelector('.item--price3').innerHTML = `R$: ${item.preço.toFixed(2)}`
        
        apeItem.querySelector('.item--img3 img').src = item.img
         
       
    
           document.querySelector('.area').append(apeItem)
      })
    }else if(index == 2){
      
      c('.area').innerHTML = ''
      c('.lanches').classList.remove('active')
      c('.aperitivos').classList.remove('active')
      c('.beers').classList.remove('active')
      c('.zero').classList.remove('active')
      e.target.classList.add('active')
      
      ptItem.map((item,index)=>{
        let pts = c('.models3 .item--content3').cloneNode(true)
        
        pts.querySelector('.item--name3 p').innerHTML = item.nome
        pts.querySelector('.item--name3 span').innerHTML = item.span
        pts.querySelector('.item--desc3').innerHTML = item.desc
        pts.querySelector('.item--price3').innerHTML = `R$: ${item.preço.toFixed(2)}`
        pts.querySelector('.item--img3 img').src = item.img
          
        c('.area').append(pts)
      })
    }else if(index == 4){
      
         c('.area').innerHTML = ''
         c('.lanches').classList.remove('active')
         c('.aperitivos').classList.remove('active')
         c('.beers').classList.remove('active')
         c('.pasteis').classList.remove('active')
         e.target.classList.add('active')
      
         zeroJson.map((item, index) => {
               let zeroItem = c('.models3 .item--content3').cloneNode(true)
      
               zeroItem.querySelector('.item--name3 p').innerHTML = item.nome
               zeroItem.querySelector('.item--name3 span').innerHTML = item.span
               
               zeroItem.querySelector('.item--price3').innerHTML = `R$: ${item.preço.toFixed(2)}`
               zeroItem.querySelector('.item--img3 img').src = item.img
      
               c('.area').append(zeroItem)
      })
    }
        
  })
  
})

 
  
  
  


    
    