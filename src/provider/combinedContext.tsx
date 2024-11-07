import React, { createContext, useContext, useState } from 'react';

import {
  type UseEventOperations,
  useEventOperations,
} from '../feature/addOrEdit/@hooks/useEventOperations';
import { type UseCalendarView, useCalendarView } from '../feature/calendar/@hooks/useCalendarView';
import { type UseSearch, useSearch } from '../feature/searchCalendar/@hooks/useSearch';
import { Event } from '../types';

const CombinedContext = createContext<
  (UseCalendarView & UseEventOperations & UseSearch & { editingEvent: Event | null }) | null
>(null);

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
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const editEvent = (event: Event) => {
    setEditingEvent(event);
  };

  const eventOperations = useEventOperations(Boolean(editingEvent), () => setEditingEvent(null));

  const search = useSearch(eventOperations.events, calendar.currentDate, calendar.view);

  const value = {
    ...calendar,
    ...eventOperations,
    editEvent,
    editingEvent,
    setEditingEvent,
    ...search,
  };
  return <CombinedContext.Provider value={value}>{children}</CombinedContext.Provider>;
}
