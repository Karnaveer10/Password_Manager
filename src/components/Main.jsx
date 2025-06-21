import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';


const Main = () => {
    const pass = useRef("password")// to change the password type
    const ref = useRef("")// to change image src
    const [pArray, setpArray] = useState([])// to store all the inputs 
    const [form, setform] = useState({ 'site': "", 'username': "", 'password': "" })// to store the current set of inputs 
    useEffect(() => {
        if (localStorage.getItem("passwords")) {
            setpArray(JSON.parse(localStorage.getItem("passwords")))
        }

    }, [])// update the array with all the previous stores inputs on first render 
    useEffect(() => {
        console.log(pArray)
    }, [pArray])

    const showPassword = () => {
        if (ref.current.src.includes('open')) {
            ref.current.src = "/images/closed.svg"
            pass.current.type = 'text'



        }
        else {
            ref.current.src = "/images/open.svg"
            pass.current.type = 'password'
        }
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const savepassword = () => {
        const newEntry = { ...form, id: uuidv4() };
        const updatedArray = [...pArray, newEntry];
        toast.success('Saved Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setpArray(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
        console.log(updatedArray);// print and update local storage using updated Array only not pArray , because state takes time to update 
    }
    const editPass = (id) => {
        setform(pArray.filter(item => item.id === id)[0])
        const updatedArray = pArray.filter(item => item.id !== id);
        setpArray(updatedArray);// do not update the local storage , like do not delete from local storage because the user might not make new changes 
        // suppose if no new changes are made the local storage wont have duplicates because id is not unique
    }
    const delPass = (id) => {
        toast.success('Deleted Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        const updatedArray = pArray.filter(item => item.id !== id);
        setpArray(updatedArray);
        localStorage.setItem("passwords", JSON.stringify(updatedArray));
    }

    return (

        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
                <div className='text-white  min-w-[66%] mx-auto flex flex-col items-center gap-5 '>
                    <div className="title font-bold text-white max-px-40 text-3xl"><span className="text-yellow-400">&lt;</span>/Pass<span className='text-yellow-400'>Ops/&gt;</span></div>
                    <h2 className='font-semibold text-yellow-200'>Your Password Manager</h2>
                    <input type="text" value={form.site} name='site' placeholder='Enter Webstite URL' className="max-w-[80%] rounded-full  text-black p-2 text-[15px] bg-yellow-100" onChange={handleChange} />
                    <div className="inputs flex gap-5 max-sm:gap-2 max-w-[80%] justify-center mx-auto">
                        <input type="text" name='username' value={form.username} placeholder='Enter Username' className='max-w-[60%] rounded-full  text-black p-2 text-[15px] bg-yellow-100 ' onChange={handleChange} />
                        <div className='max-w-1/3  text-black  text-[15px] relative'>
                            <input type="password" name='password' value={form.password} placeholder='Enter Password' className='p-2 rounded-full min-w-[100%] bg-yellow-100 ' onChange={handleChange} ref={pass} />
                            <img src="/images/open.svg" className='absolute top-2 right-3 cursor-pointer' onClick={showPassword} ref={ref} />
                        </div>
                    </div>
                    <button className='bg-yellow-300 rounded-full px-4 py-2 font-bold hover:bg-yellow-500 text-black flex items-centers-' onClick={savepassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Add

                    </button>
                    {/* // this is important , cant use if else statement */}
                    {(pArray.length === 0 && <div>NO passwords to display</div>)}
                    {(pArray.length !== 0 && <div className="w-[66%] overflow-x-auto">
                        <table className="table-auto w-full min-w-[600px] border border-white ">
                            <thead className='bg-violet-500 text-yellow-300'>
                                <tr >
                                    <th className='border border-white px-3' >Site URL</th>
                                    <th className='border border-white px-3 '>Username</th>
                                    <th className='border border-white px-3'>Password</th>
                                    <th className='border border-white px-3'>Actions</th>

                                </tr>
                            </thead>
                            <tbody className='text-yellow-300'>
                                {pArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='border border-white px-3 bg-slate-800'>{item.site}</td>
                                        <td className='border border-white px-3 bg-slate-800'>{item.username}</td>
                                        <td className='border border-white px-3 bg-slate-800'>{item.password}</td>
                                        <td className='border border-white px-3 bg-slate-800' ><div className="actions flex justify-center gap-5">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                colors="primary:#ffea00"

                                                style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}
                                                onClick={() => { editPass(item.id) }}// always arrow function in eventlistner while passing item 
                                            >
                                            </lord-icon>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                colors="primary:#ffea00"
                                                onClick={() => { delPass(item.id) }}
                                                style={{ "width": "25px", "height": "25px", "cursor": "pointer" }}>
                                            </lord-icon>
                                        </div></td>

                                    </tr>

                                })}

                            </tbody>
                        </table>
                        </div>
                    )}
                    </div>


                </div>

    )
}

export default Main
