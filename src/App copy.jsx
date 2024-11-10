
// // // // import { useState } from 'react'
// // // // import './App.css'



// // // // function App() {
// // // //   const [number , Setnumber] = useState (0)
// // // //   function add () {
// // // //     Setnumber (number+1)
// // // //   }
// // // //   function minus () {
// // // //     Setnumber ( number+1)
// // // //   }
// // // //   function reset () {
// // // //     Setnumber (number * 0)
// // // //   }



// // // //   return (
// // // //    <div>
// // // //     <div className = "flex justify-cente"> 
// // // //       <div className= "flex justify-center items-center w-[100%] h-[200px] border-solid border-2 border-black	border-color: rgb(0 0 0);">
// // // //         <div className= "w-[30%] h-[200px] border-solid border-2 border-black	border-color: rgb(0 0 0);">
// // // //           <div className =  " flex justify-center items-center w-[100%] h-[100px] border-solid border-2 border-black	border-color: rgb(0 0 0); ">
// // // //             <div>0</div> 
// // // //           </div>
// // // //           <div className = "flex w-[100%] h-[100px] border-solid border-2 border-black	border-color: rgb(0 0 0); ">
// // // //             <div className = " flex justify-center items-center w-[40%] h-[100px] border-solid border-2 border-black	border-color: rgb(0 0 0); "> -

// // // //             </div>
// // // //             <div className = "flex justify-center items-center w-[40%] h-[100px] border-solid border-2 border-black	border-color: rgb(0 0 0); "> Reset

// // // //             </div>
// // // //             <div className = " flex justify-center items-center w-[40%] h-[100px] border-solid border-2 border-black	border-color: rgb(0 0 0); "> +

// // // //             </div>
// // // //             </div>
// // // //         </div>
// // // //       </div>


// // // //     </div>
// // // //    </div>

// // // //   )
// // // // }
// // // // // 

// // // // export default App

// // // import { useState } from 'react'
// // // import './App.css'



// // // function App() {
// // //   return (


// // //     <div className="flex justify-center">
// // //       <div className="w-[960px] flex justify-center mt-10 ">
// // //         <div className="w-[460px] border-solid border-2 border-black">
// // //           <h1 className="text-center font-bold p-4">BMI Calculator</h1>

// // //           {/* <p className= "font-bold mx-2">ນໍ້າໜັກ</p> */}
// // //           <div class="w-full max-w-sm min-w-[200px] mb-5 mt-2 mx-2">
// // //             <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="ປ້ອນໜໍ້າໜັກ Kg" />
// // //             </div>

// // //           <div class="w-full max-w-sm min-w-[200px] mb-5  mt-2 mx-2">
// // //           <p className= "font-bold mx-2 mb-2">ສ່ວນສູງ</p>
// // //             <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="ປ້ອນສ່ວນສູງ cm" />
// // //           </div>
// // //           <button type="button" class="່flex justify-center mx-11 mb-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ກວດສອບ</button>

// // //           {/* <form action=""className=''>
// // //       <label htmlFor=''>ນໍ້າໜັກ </label><br/>
// // //       <input className='border-solid border-2 border-black' type='text'placeholder='ນໍ້າໜັກເປັຮ ກິໂລຫລາມ'></input>
// // //       <label htmlFor='className='> ຄວາມສູງ</label><br/>
// // //      <input className="border-solid border-2  border-black"type='text'placeholder='ຄວາມສູງເປັນຊັງຕີແມັດ'></input>
// // //      <buttom className="bg-green-600 text-white mt-4 p-2 rounded-2xl" type="submit">ຄໍານວນ</buttom>
// // //     </form> */}


// // //         </div>


// // //       </div>
// // //     </div>
// // //   )
// // // }
// // // export default 

// // import React, { useState } from 'react'

// // function App() {

// // const [news, setnews]= useState([
// //   {title:"Cartoon1", detail:"Ben10", data:"10/10/2024"},
// //   {title:"Cartoon2", detail:"Ben10", data:"10/10/2024"},
// //   {title:"Cartoon3", detail:"Ben10", data:"10/10/2024"},
// //   {title:"Cartoon4", detail:"Ben10", data:"10/10/2024"},
// // ])


// //   return (
// //     <div>
// //       <div className='w-full  bg-fuchsia-400 flex justify-center'>
// //         <div className='w-[960px]  bg-slate-300 flex'>
// //           {news.map((item,index)=>(
// //               <div key={index} className='w-[25%] h-[300px] bg-blue-400'>
// //            <img className='w-full h-[200px] bg-green-300'/>
// //            <p>{item.title}</p>
// //            <p>{item.detail}</p>
// //            <p>{item.date}</p>
// //           </div> 

// //           ))}

        
// //         </div>
// //       </div>
// //     </div>



// //   )
// // }

// // export default App


// import React from 'react'

// function App() {
//   return (
//     <div>
//       <div>
//   <div className="w-full h-[250px] flex justify-center items-center bg-purple-400"> 
// <p> Hero Section</p>
//   </div>
//   <div className="w-full h-[250px] flex justify-center items-center bg-red-400"> 
// <p> Content section</p>
//   </div>
//   <div className="w-full h-[250px] flex justify-center items-center bg-pink-300"> 
// <p> About section</p>
//   </div>
// </div>
//     </div>
//   )
// }

// export default App
import React from 'react'

function App() {
  return (
    <div>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='w-[200px] bg-gray-300 rounded-md text-center shadow-md'>
          <h1>ຊື້:ໝາກກ້ວຍ</h1>
          <p>ລາຄາ: 2000 ກີບ</p>
          <p>ນໍ້າໜັກ: 2kg</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
