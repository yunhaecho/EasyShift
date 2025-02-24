"use client"

import { Button } from '@headlessui/react';
import React, {useState } from 'react';
import PlusIcon from '@/assets/icons/plus.svg';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import Status from './components/Status';
import Actions from './components/Actions';

export default function Schedule() {
  const [isStatusFilter, setIsStatusFilter] = useState(false);
  const [isYearFilter, setIsYearFilter] = useState(false);
  const [status, setStatus] = useState('');
  const [year, setYear] = useState('');

  //현재 명세서상에는 deadline x
  const mockData = [
    {
        "id": 101,
        "scheduleName": "야간 근무",
        "shiftDate": "2024-11",
        "status": "pending",
        "description": "야간 근무 일정입니다."
    },
    {
        "id": 102,
        "scheduleName": "주간 근무",
        "shiftDate": "2023-11",
        "status": "completed",
        "description": "주간 근무 일정입니다."
    }
  ]

  const column = ['Period', 'Status', 'Actions'];
  const statusOption = ['All Status', 'Pending', 'Completed'];

  //연도 배열(중복 제거)
  const yearOption = Array.from(
    new Set(mockData.map((schedule)=> schedule.shiftDate.substring(0,4)))
  );
  
  // 상태 필터링(응답이 소문자라 소문자로 맞추기)
  const filterStatus = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    const selectedStatus  = e.currentTarget?.textContent ?? '';
  
    if(selectedStatus === 'All Status') {
      setIsStatusFilter(false);
      setStatus(status);
    } else if (selectedStatus === 'Pending'){
      setIsStatusFilter(true);
      setStatus('pending');
    } else {
      setStatus('completed');
    }
  }

  //연도 필터링
  const filterYear = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    const seletedYear = e.currentTarget?.textContent ?? '';
    setYear(seletedYear);
    setIsYearFilter(true);
  }

  const filteredData = mockData.filter((schedule) => {
    const sameStatus = !isStatusFilter || schedule.status === status;
    const sameYear = !isYearFilter || schedule.shiftDate.substring(0,4) === year;
    return sameStatus && sameYear;
  })

  return (
    <div className='p-30 w-full h-full '>
        
        {/* Header */}
        <div className=' w-full h-40 flex flex-row justify-between mb-40 '>
            <span className='head-24-700'>Schedule Management</span>
            <Button type='button' className='flex flex-row justify-center items-center w-205 h-full bg-black text-sm rounded text-white p-15'>
                <PlusIcon className='mr-8'/>
                Create New Schedule 
            </Button>
        </div>
        
        {/* 상태 연도 드랍다운바*/}
        <div className='w-full h-auto rounded-5 shadow-sm '>
            <div className='flex flex-row w-full h-71 bg-white p-16 gap-16 rounded-t-sm border-b border-gray-300'>
                
                {/* 상태*/}
                <Menu>
                  <MenuButton type='button' className="body-14-400 flex w-122 border border-gray-400 py-9 pl-12 text-gray-900 items-center transition-all duration-00 ease-in-out">
                      {isStatusFilter ? status : 'All Status'}
                      <ChevronDownIcon />
                  </MenuButton>
                  <MenuItems anchor="bottom" className="mt-5 w-122 border border-gray-400 bg-white">
                    {statusOption.map((stat) => (
                      <MenuItem as="div" key={stat}>
                          <a 
                            className="block px-12 py-9 data-[focus]:bg-gray-300 cursor-pointer" 
                            onClick={filterStatus}>
                            {stat}
                          </a>
                        </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                
                {/* 연도*/}
                <Menu>
                  <MenuButton as="div" className="body-14-400 flex w-86 border border-gray-400 py-9 pl-13 text-gray-900 items-center">
                    {isYearFilter ? year : 'Year'}
                    <ChevronDownIcon />
                  </MenuButton>
                    <MenuItems anchor="bottom" className="mt-5 w-86 border border-gray-400 bg-white">
                      <MenuItem as="div">
                      {yearOption.map((year) => (
                        <a 
                          key={year}
                          className="block px-12 py-9 data-[focus]:bg-gray-300 cursor-pointer"
                          onClick={filterYear}>
                          {year}
                        </a>
                      ))}

                      </MenuItem>
                    </MenuItems>
                </Menu>
            </div>

        {/* 스케줄 조회 */}
        <table className="table-fixed w-full">
          
            <thead>
              <tr className="border-b border-gray-300 caption-12-500">
                {column.map((col) => (
                  <td className="w-1/5 py-12 px-24" key={col}>{col}</td>
                ))}
              </tr>
            </thead>

            <tbody>    
              {filteredData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300 bg-white">
                    <td className="py-12 px-24 body-14-500">{item.shiftDate}</td>
                    <td className="py-12 px-24"><Status status={item.status}/></td>
                    <td className="py-12 px-24"><Actions/></td>
                </tr>
                ))
              }
            </tbody>
            
          </table>

      </div>
    </div>
  )
}
 
