import { Button } from '@headlessui/react';
import React from 'react';
import PlusIcon from '@/assets/icons/plus.svg';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import StatusPending from './components/StatusPending';
import StatusCompleted from './components/StatusCompleted';
import Submissions from './components/Submissions';
import Actions from './components/Actions';
export default function page() {

    const category = ['Period', 'Status','Deadline','Submissions', 'Actions'];

    // const data = [
    //     {
    //         'period' : 'March 2024',
    //         'status' : 'Pending',
    //         'deadline' : 'February 28, 2024',
    //         'submissions' : '15', 
    //         'actions' : 'generate'
    //     }
    // ];
    
    // const links = [
    //     { href: '/settings', label: 'Settings' },
    //     { href: '/support', label: 'Support' },
    //     { href: '/license', label: 'License' },
    //   ]

  return (
    <div className='p-30 w-full h-full '>
        <div className=' w-full h-40 flex flex-row justify-between mb-40 '>
            <span className='head-24-700'>Schedule Management</span>
            <Button className='flex flex-row justify-center items-center w-205 h-full bg-black text-sm rounded text-white p-15'>
                <PlusIcon className='mr-8'/>
                Create New Schedule 
            </Button>
        </div>

        {/* 필터링 */}
        <div className='w-full h-auto rounded-5 shadow-sm '>
            <div className='flex flex-row w-full h-71 bg-white p-16 gap-16 rounded-t-sm border-b border-gray-300'>
                <Menu>
                  <MenuButton className="body-14-400 flex w-122 border border-gray-400 py-9 pl-12 text-gray-900 items-center transition-all duration-00 ease-in-out">
                      All Status
                      <ChevronDownIcon />
                  </MenuButton>
                  <MenuItems anchor="bottom" className="mt-5 w-122 border border-gray-400 bg-white">
                    <MenuItem>
                      <a className="block px-12 py-9 data-[focus]:bg-gray-300 cursor-pointer">
                        Pending</a>
                    </MenuItem>
                    <MenuItem>
                      <a className="block px-12 py-9 data-[focus]:bg-gray-300 cursor-pointer">
                        Completed
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                
                {/* 매장 생성한 연도를 가져와서 -> 해당 시점 부터 현재연도 까지map을 돌려서 */}
                <Menu>
                <MenuButton className="body-14-400 flex w-86 border border-gray-400 py-9 pl-13 text-gray-900 items-center">
                      2024
                      <ChevronDownIcon />
                  </MenuButton>
                  <MenuItems anchor="bottom" className="mt-5 w-86 border border-gray-400 bg-white">
                    <MenuItem>
                    {/* 매장 생성한 연도부터 */}
                      <a className="block px-12 py-9 data-[focus]:bg-gray-300 cursor-pointer">
                        2024
                      </a>
                    </MenuItem>
                    
                  </MenuItems>
                </Menu>
            </div>

            {/* 임시 */}
            <table className="table-fixed w-full">
              <thead>
                <tr className="border-b border-gray-300 caption-12-500">
                  {category.map((items) => (
                    <td className="w-1/5 py-12 px-24" key={items}>{items}</td>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-300 bg-white">
                  <td className="py-12 px-24 body-14-500">March 2024</td>
                  <td className="py-12 px-24"><StatusPending /></td>
                  <td className="py-12 px-24 body-14-400 text-gray-600">Feb 28, 2024</td>
                  <td className="py-12 px-24"><Submissions/></td>
                  <td className="py-12 px-24"><Actions/></td>
                </tr>

                <tr className="border-b border-gray-300 bg-white">
                  <td className="py-12 px-24 body-14-500">March 2024</td>
                  <td className="py-12 px-24"><StatusCompleted /> </td>
                  <td className="py-12 px-24 body-14-400 text-gray-600">Feb 28, 2024</td>
                  <td className="py-12 px-24"><Submissions/></td>
                  <td className="py-12 px-24"><Actions/></td>
                </tr>
              </tbody>
            </table>

      </div>
    </div>
  )
}
 
