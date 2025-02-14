import RightArrowIcon from '@/../public/icons/right-arrow.svg';
import LeftArrowIcon from '@/../public/icons/left-arrow.svg';

export default function Calendar() {
    const weekdays = ['Sun', 'Mon','Tue','Wed','Thr','Fri','Sat'];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const inactiveDays = [25,26,27,28,29];
    return (
        // calendar
        <>
          <div className='flex flex-row justify-between h-32 mb-26' >
            <span className='text-head-20-600 font-semibold text-xl'> March 2023</span>
            <div className='flex flex-row h-full gap-8 '>
              <button className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <LeftArrowIcon/>
              </button>
              <button className='pointer-cursor flex w-32 items-center justify-center rounded-1 border border-gray-300'>
                  <RightArrowIcon/>
              </button>
            </div>
          </div>
          
          <div className="list-none text-center w-full ">
            <ul className="grid grid-cols-7 auto-rows-[40px]  gap-8 ">
              {/* week */}
              {weekdays.map((week) => (
                <li 
                  key={week}
                  className="body-14-500 text-gray-600 mb-5 ">{week}</li>
              ))}
            </ul>

            <ul className="auto-rows-[62px] grid grid-cols-7 gap-8 ">
              {/* days */}
              {inactiveDays.map((day) => (
                <li 
                  key={day}
                  className="border text-gray-700 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400">{day}</li>
              ))}
              {days.map((day) => (
                <li 
                  key={day}
                  className="border text-gray-700 cursor-pointer border-gray-300 pt-8 rounded-lg body-14-400">{day}</li>
              ))}
            </ul>
          </div>
        </>
    )
}