import { useState } from "react";

function useMonthlyCalendar() {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth ] = useState(new Date().getMonth()); //0-indexed
 
  const goToPrevOrNextMonth = ( deltaMonth : number) => {
    setCurrentMonth(prevMonth => {
      const newMonth = (prevMonth + deltaMonth + 12) % 12;
      return newMonth;
    });

    setCurrentYear (prevYear => (
      prevYear + ( deltaMonth < 0 && currentMonth === 0 ? -1 : deltaMonth > 0 && currentMonth === 11 ? 1 : 0)
    
    ));
  }
 return {currentMonth, currentYear, goToPrevOrNextMonth}
}

export default useMonthlyCalendar;