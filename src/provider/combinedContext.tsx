import React, { createContext, useContext } from 'react';

import { useEventForm } from '../feature/addOrEdit/@hooks/useEventForm';
import {
  EventOperations,
  useEventOperations,
} from '../feature/addOrEdit/@hooks/useEventOperations';
import { CalendarView, useCalendarView } from '../feature/calendar/@hooks/useCalendarView';

const CombinedContext = createContext<(CalendarView & EventOperations) | null>(null);

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
  const { editingEvent, setEditingEvent } = useEventForm();
  const eventOperations = useEventOperations(Boolean(editingEvent), () => setEditingEvent(null));

  const value = { ...calendar, eventOperations, editingEvent, setEditingEvent, ...eventOperations };
  return <CombinedContext.Provider value={value}>{children}</CombinedContext.Provider>;
}
