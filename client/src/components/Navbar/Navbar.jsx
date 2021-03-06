import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import pic from "../../assets/IIITDM-Kurnool-Logo.webp"
import {
    PhoneIcon,
    HomeIcon,
    XIcon,
    MenuIcon
} from '@heroicons/react/outline'

const solutions = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: PhoneIcon
    },
]

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
    };
    return (
        <Popover className="relative bg-white z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink className="flex flex-start justify-center items-center" to={"/"}>
                            <div>
                                <img className="object-fit h-10 w-10 mr-2" src={pic} alt="Logo" />
                            </div>
                            <div>
                                <span className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">OAMS</span>
                                <span> | </span>
                                <span className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">IIITDM Kurnool</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <NavLink to={"/"} className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">
                            Home
                        </NavLink>
                        <NavLink to={"/contact"} className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">
                            Contact
                        </NavLink>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base cursor-pointer font-medium text-white bg-[#6C63FF] hover:bg-green-100 hover:text-[#6C63FF] hover:outline-[#6C63FF]"
                            onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">OAMS</span>
                                    <span> | </span>
                                    <span className="text-base font-medium text-gray-500 hover:text-[#6C63FF]">IIITDM Kurnool</span>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-[#6C63FF]" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6C63FF] hover:bg-[#206bfb] cursor-pointer"
                                    onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>)
}

export default Navbar;
