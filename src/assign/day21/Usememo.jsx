import React, { useMemo, useState } from 'react'


const datas=(searchitem,datapro,sortdata)=>{

  let allproduct = [...datapro]

  const filterprocess= allproduct.filter((e)=>e.productName.toLowerCase().includes(searchitem.toLowerCase()))

  if(sortdata==="Asc"){
filterprocess.sort((a,b)=>a.productPrice-b.productPrice)

console.log("aseending ppp");





  }

    if(sortdata==="Dse"){
filterprocess.sort((a,b)=>b.productPrice-a.productPrice)

console.log("desending ppp");



  }


  

console.log("Filter");

 return filterprocess

}





const Usememo = ( ) => {  

  console.log("Components");

  const [search,setSearch] = useState("")

  const [themechange,setThemechange] = useState(false)

  const [selectsort,setSelectsort] =useState(null)



  const productData = [
    {productId:100,productName:"Pizza",productPrice:200},
    {productId:101,productName:"Iphone",productPrice:75000},
     {productId:102,productName:"Cricket Bat",productPrice:10000},
     {productId:103,productName:"Dress",productPrice:1000},
     {productId:104,productName:"Bottle",productPrice:300}
 ]


 const handlesearch =(e)=>{

  setSearch(e.target.value)

  // console.log(search);

 }

  const memoize = useMemo(()=>{
 const showndata = datas(search,productData,selectsort)

 return showndata

  },[search, selectsort])




 


 const handletheme =()=>{

  setThemechange(!themechange)

 }


 const light = {
  background : "white",
  color : "black"
 }

  const dark = {
  background : "black",
  color : "white"
 }


 const handlesort =(e)=>{

  setSelectsort(e.target.value)

 }








  return (
   <>

  <div>
     <input type="text" placeholder='Search The Product' onChange={handlesearch}/>
  </div>

     <div>
    <select onChange={handlesort}>
      <option value="Asc">Ascending</option>
       <option value="Dse">Decending</option>
    </select>
   </div>


   <h1>Product details</h1>


   {memoize.map((e)=>(
    <div key={e.productId}>
      <h2>{e.productName}</h2>
      <p>{e.productPrice}</p>
    </div>
   ))}


   <div>
    <div style={themechange?light:dark}>
      <h1>BOX</h1>


    </div>

    <button onClick={handletheme}>ToChange</button>
   </div>






    
    
    
    
    </>
  )
}

export default Usememo