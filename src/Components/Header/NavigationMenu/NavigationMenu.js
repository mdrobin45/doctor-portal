import React,{Fragment} from 'react';
import { Disclosure } from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import {BsSearch} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


const navigation = [
    { name: 'Home', to:'/home', current: true },
    { name: 'About', to:'/about', current: false },
    { name: 'Services', to:'/services', current: false },
    { name: 'Contact', to:'/contact', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const NavigationMenu = () =>
{
    return (
        <Disclosure as="nav" className='bg-darkGreen'>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          'text-gray-100 hover:bg-orange hover:text-white',
                          'px-3 py-4 rounded text-xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='flex items-center'>
                    <input style={{background:'#409BBC'}} className='border-none placeholder-white text-white outline-none text-lg py-2 px-3 rounded-l' placeholder='Search' type="text" />
                    <button style={{background:'#409BBC'}} className='py-3 text-white pr-3 text-xl rounded-r'><BsSearch/></button>           
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            className={classNames(
                            'text-gray-100 hover:bg-orange hover:text-white',
                            'px-3 py-4 block rounded text-xl'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </NavLink>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    );
};

export default NavigationMenu;