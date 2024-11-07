import { useState } from 'react';

import { useGetHolidays } from '../@service';

export type CalendarView = {
  view: 'week' | 'month';
  currentDate: Date;
  holidays: Record<string, string[]> | {};
  navigate: (_direction: 'prev' | 'next') => void;
  setView: React.Dispatch<React.SetStateAction<'week' | 'month'>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const useCalendarView = (): CalendarView => {
  const [view, setView] = useState<'week' | 'month'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data: holidays = {} } = useGetHolidays(currentDate);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (view === 'week') {
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
      } else if (view === 'month') {
        newDate.setDate(1); // 항상 1일로 설정
        newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
      }
      return newDate;
    });
  };

  return { view, setView, currentDate, setCurrentDate, holidays, navigate };
};
