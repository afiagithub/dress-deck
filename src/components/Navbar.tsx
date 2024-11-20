import Link from "next/link"

const Navbar = () => {
    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Category</Link></li>
        <li><Link href={'/'}>About Us</Link></li>
        <li><Link href={'/'}>Blog</Link></li>
        <li><Link href={'/'}>Contact</Link></li>
    </>
    return (
        <div className="navbar px-5 lg:px-12 py-5 bg-[#EEE2DC] font-nun">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-3xl text-[#AC3B61] font-sour">DressDeck</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase font-bold space-x-3 text-[#123C69]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline rounded-none border-2 border-[#AC3B61] text-[#AC3B61] 
                hover:bg-[#AC3B61] hover:border-[#AC3B61] text-base">Log In</a>
            </div>
        </div>
    )
}

export default Navbar
