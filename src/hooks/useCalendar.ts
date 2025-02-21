import { useState } from "react";

function useCalendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth ] = useState(new Date().getMonth()); //0-indexed

  const changeMonth = (num : number) => {
    setCurrentMonth( prevMonth => {
      const newMonth = prevMonth + num;
      if(newMonth < 0 ) return 11;
      if(newMonth > 11) return 0;
      return newMonth;
    });

    setCurrentYear (prevYear => (
      prevYear + ( num < 0 && currentMonth === 0 ? -1 : num > 0 && currentMonth === 11 ? 1 : 0)
    
    )
  );
  }
 return {currentMonth, currentYear, changeMonth}
}

export default useCalendar;