 import React, { useEffect, useState } from 'react'

const Stundentsea = () => {
    const [search, setSearch] = useState([])
    const [datasShow, setDatasShow] = useState("")

    const feaching = async () => {
        const datatake = await fetch("https://dummyjson.com/products")
        const res = await datatake.json()
        setSearch(res.products)
    }

    useEffect(() => {
        feaching()
    }, [])

    const handlechange = (e) => {
        setDatasShow(e.target.value)
    }

    const searchResult = search.filter((e) =>  e.title.toLowerCase().includes(datasShow.toLowerCase()))

    return (
        <div className="p-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <input 
                type="text" 
                placeholder='Search products...' 
                onChange={handlechange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Results Count */}
            {/* {datasShow && (
                <p className="text-sm text-gray-500 mt-2">
                    Found {searchResult.length} result{searchResult.length !== 1 ? 's' : ''}
                </p>
            )} */}

            {/* Product List */}
            <div className="mt-4 space-y-2">
                {searchResult.length > 0 ? (
                    searchResult.map((e) => (
                        <div 
                            key={e.id} 
                            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                        >
                            <p className="font-medium text-gray-800">{e.title}</p>
                            <p className="text-sm text-gray-500">{e.category}</p>
                        </div>
                    ))
                ) : (
                    datasShow && (
                        <p className="text-center text-gray-500 py-8">
                            No products found for "<span className="font-medium">{datasShow}</span>"
                        </p>
                    )
                )}
            </div>
        </div>
    )
}

export default Stundentsea




// const Stundentsea = () => {

//      const [search, setSearch] = useState([])
//      const [datasShow, setDatasShow] = useState("")

//    const feaching = async () => {
//          const datatake = await fetch("https://dummyjson.com/products")
//          const res = await datatake.json()
//          setSearch(res.products)
//      }

//      useEffect(() => {
//          feaching()
//     }, [])

//     const handlechange =(e)=>{

//         setDatasShow(e.target.value)
//     }

//     const showing = search.filter((e)=>e.title.toLowerCase().includes(datasShow.toLowerCase()))

//     console.log(showing);
    
//   return (
//    <>
//     <input type="text" placeholder='Search' onChange={handlechange} />
//     {showing.map((e)=>(
//         <div key={e.id}>
//             <p>{e.title}</p>
//             <p>{e.category}</p>
//         </div>
//     ))}
   
//    </>
//   )
// }

// export default Stundentsea