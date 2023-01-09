import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav className="bg-gray-100">
            <div className="p-3 mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <div>
                            <a className="flex items-center py-1 px-3 ">
                                <img src="https://images.unsplash.com/photo-1597626133663-53df9633b799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" className="h-12 w-12 inline rounded-full " />
                                <span className=" text-lg text-yellow-700 mx-2">namehere</span>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="py-2 px-3">pricing</a>
                            <a href="py-2 px-3">learn</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center mx-2">
                        <button className="bg-yellow-300 p-2 rounded-xl mx-2">
                            <a href="">get started</a>
                        </button>
                        <a href="" className="">Login</a>
                    </div>

                    <div className="md:hidden flex items-center mx-0">
                        <button onClick={handleToggle} className='mobile-menu-button cursor-pointer'>
                            <GiHamburgerMenu />
                        </button>

                    </div>
                </div>
            </div>
            <div className="mobile-menu md:hidden">
                <a href="" className={`${toggle ? 'block py-2 px-4 text-md hover:bg-grey-200' : 'hidden'}`}>Pricing</a>
                <a href="" className={`${toggle ? 'block py-2 px-4 text-md hover:bg-grey-200' : 'hidden'}`}>Learn</a>
                <a href="" className={`${toggle ? 'block py-2 px-4 text-md hover:bg-grey-200' : 'hidden'}`}>Get started</a>
                <a href="" className={`${toggle ? 'block py-2 px-4 text-md hover:bg-grey-200' : 'hidden'}`}>Login</a>
            </div>

        </nav>
    )
}