import React from 'react'
// import Logo from 

const Login = () => {
    return (
        <div className='w-full h-screen bg-slate-400'>
            <div className='w-[400px] min-h-[600px] bg-gray-500'>
                <div className='w-full flex justify-center'>
                    <div className='w-[80px] min-h-[100px] bg-slate-100'>
                        <div className='w-[80px] h-[80px] bg-gray-400'>
                            <img alt="logo" className='w-full h-full' />
                            <h1 className='text-center text-[14px] font-semibold'>ຂາໄກ່ເຈ້ຕຸ້ຍ</h1>
                            <div className='w-full min-h-[500px] bg-white border-gray-200 rounded-md mt-[20px] p-[14px]'>
                                <h2 className='text-center text-[20px] font-bold mt-[8px]'>ລ໋ອກອິນ</h2>
                                <p className='mt-[32px]'>ໍຊື່ຜູ້ໃຊ້</p>
                                <input className='w-full border border-gray-200 rounded-[6px] py-[8px] focus:outline-none ' type='text' />
                                <p className='mt-[20px]'>ລະຫັດຜ່ານ</p>
                                <input className='w-full border border-gray-200 rounded-[6px] py-[8px] focus:outline-none ' type='text' />
                                <div className='w-full flex mt-[8px]'>
                                    <input className='w-[16px] h-[16px]' type='checkbox' name='remember' />
                                    <label for="remember">ຈື່ຂ້ອຍ</label>
                                    <div>
                                        <button className='w-full bg-green-500 py-[8px] rounded-md text-white mt-[20px]'>ລ໋ອກອິນ</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
