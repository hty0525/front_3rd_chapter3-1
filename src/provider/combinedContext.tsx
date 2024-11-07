import React, { createContext, useContext } from 'react';

import { CalendarView, useCalendarView } from '../feature/calendar/@hooks/useCalendarView';

const CombinedContext = createContext<CalendarView | null>(null);

export const useCombinedContext = () => {
  const context = useContext(CombinedContext);
  if (!context) {
    throw new Error('CombinedContext를 찾을 수 없습니다.');
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export function CombinedContextProvider({ children }: Props) {
  const calendar = useCalendarView();

  const value = { ...calendar };
  return <CombinedContext.Provider value={value}>{children}</CombinedContext.Provider>;
}
