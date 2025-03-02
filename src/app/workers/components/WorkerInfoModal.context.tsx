import { useWorkerScheduleQuery } from "@/api/endpoints/settings/workerSchedule/useFetchWorkerScheule"
import { format } from 'date-fns';
import { createContext } from "react";
import useMonthlyCalendar from '@/hooks/useMonthlyCalendar';
import { JSX } from "react";
import { WorkerScheduleResponse } from "@/api/endpoints/settings/workerSchedule/workerSchedule";

export const DialogContext = createContext<WorkerScheduleResponse>({
    schedules: [],
  });

export const Provider = ({ children}  : {children : JSX.Element[] }) => { 
    const {currentMonth , currentYear} = useMonthlyCalendar();
    const date = new Date(currentYear, currentMonth);   

    const { data} = useWorkerScheduleQuery(`${format(date, 'yyyy-MM')}`)
  
    return <DialogContext.Provider value={data}>{ children}</DialogContext.Provider>
  }