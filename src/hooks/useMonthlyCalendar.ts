import { useState } from "react";
// import { addMonths } from "date-fns";

function useMonthlyCalendar() {
  // state를 하나라도 줄일 수 있으면 좋음
  // currentDate , 
 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth ] = useState(new Date().getMonth()); //0-indexed
 
  // 컴포넌트 이름을 addMonth 뭐 이런걸로 변경, arg name도 deltaMonth  같은걸로 ✅
  const goToPrevOrNextMonth = ( deltaMonth : number) => {
      // Math.min , Math.max 활용해보기 => 안 쓰는게 코드를 봤을 때 이해가 빨라서 안 쓰는 걸로. ✅
    setCurrentMonth(prevMonth => {
      const newMonth = (prevMonth + deltaMonth + 12) % 12;
      return newMonth;
    });

    setCurrentYear (prevYear => (
      // Math.min , Math.max 활용해보기 => 안 쓰는게 코드를 봤을 때 이해가 빨라서 안 쓰는 걸로. ✅
      prevYear + ( deltaMonth < 0 && currentMonth === 0 ? -1 : deltaMonth > 0 && currentMonth === 11 ? 1 : 0)
    
    )
  );
  }
 return {currentMonth, currentYear, goToPrevOrNextMonth}
}

export default useMonthlyCalendar;