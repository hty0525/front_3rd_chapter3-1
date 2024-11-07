import { act, renderHook } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import {
  setupMockHandlerCreation,
  setupMockHandlerDeletion,
  setupMockHandlerUpdating,
} from '../../__mocks__/handlersUtils.ts';
import { events } from '../../__mocks__/response/events.json';
import { useEventOperations } from '../../feature/addOrEdit/@hooks/useEventOperations.ts';
import { server } from '../../setupTests.ts';
import { Event, EventForm } from '../../types.ts';

// ? Medium: 아래 toastFn과 mock과 이 fn은 무엇을 해줄까요?
// vi.fn()을 사용해 빈 mock 함수 toastFn을 생성 후
// vi.mock을 통해 @chakra-ui/react 모듈을 가져와서
// useToast 함수만 toastFn으로 교체하여 테스트에 사용한다.

const toastFn = vi.fn();

vi.mock('@chakra-ui/react', async () => {
  const actual = await vi.importActual('@chakra-ui/react');
  return {
    ...actual,
    useToast: () => toastFn,
  };
});

it('저장되어있는 초기 이벤트 데이터를 적절하게 불러온다', async () => {
  const initEvents = [...events] as Event[];
  setupMockHandlerCreation(initEvents);

  const { result } = renderHook(() => useEventOperations(false));

  await act(async () => {
    await result.current.fetchEvents();
  });

  expect(result.current.events).toEqual(initEvents);
});

it('정의된 이벤트 정보를 기준으로 적절하게 저장이 된다', async () => {
  const initEvents = [...events] as Event[];
  setupMockHandlerCreation(initEvents);
  const newEvent: EventForm = {
    title: '새로운 회의',
    date: '2024-10-16',
    startTime: '10:00',
    endTime: '12:00',
    description: '새로운 팀 미팅',
    location: '회의실 B',
    category: '업무',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  };

  const { result } = renderHook(() => useEventOperations(false));

  await act(async () => {
    await result.current.saveEvent(newEvent);
  });

  expect(result.current.events).toEqual([...initEvents]);
});

it("새로 정의된 'title', 'endTime' 기준으로 적절하게 일정이 업데이트 된다", async () => {
  const initEvents = [...events] as Event[];
  setupMockHandlerUpdating(initEvents);
  const { result } = renderHook(() => useEventOperations(true));

  const newEvent: EventForm = {
    title: '새로운 회의',
    date: '2024-10-16',
    startTime: '10:00',
    endTime: '12:00',
    description: '새로운 팀 미팅',
    location: '회의실 B',
    category: '업무',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  };

  await act(async () => {
    await result.current.saveEvent(newEvent);
  });

  const event = result.current.events[0];

  const editedEvent = { ...event, title: '새로운 회의', endTime: '11:00' };

  await act(async () => {
    await result.current.saveEvent(editedEvent);
  });

  expect(result.current.events[0]).toEqual(editedEvent);
});

it('존재하는 이벤트 삭제 시 에러없이 아이템이 삭제된다.', async () => {
  const initEvents = [...events] as Event[];
  setupMockHandlerDeletion(initEvents);
  const { result } = renderHook(() => useEventOperations(false));

  await act(async () => {
    await result.current.fetchEvents();
  });

  const event = result.current.events[0];

  await act(async () => {
    await result.current.deleteEvent(event.id);
  });

  expect(result.current.events).toEqual([]);
});

it("이벤트 로딩 실패 시 '이벤트 로딩 실패'라는 텍스트와 함께 에러 토스트가 표시되어야 한다", async () => {
  server.use(http.get('/api/events', () => HttpResponse.error()));

  const { result } = renderHook(() => useEventOperations(false));

  await act(async () => {
    await result.current.fetchEvents();
  });

  expect(toastFn).toHaveBeenCalledWith({
    title: '이벤트 로딩 실패',
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
});

it("존재하지 않는 이벤트 수정 시 '일정 저장 실패'라는 토스트가 노출되며 에러 처리가 되어야 한다", async () => {
  server.use(http.put('/api/events/:id', () => HttpResponse.error()));

  const { result } = renderHook(() => useEventOperations(true));

  await act(async () => {
    await result.current.saveEvent({} as EventForm);
  });

  expect(toastFn).toHaveBeenCalledWith({
    title: '일정 저장 실패',
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
});

it("네트워크 오류 시 '일정 삭제 실패'라는 텍스트가 노출되며 이벤트 삭제가 실패해야 한다", async () => {
  server.use(http.delete('/api/events/:id', () => HttpResponse.error()));

  const { result } = renderHook(() => useEventOperations(false));

  await act(async () => {
    await result.current.deleteEvent('없는 이벤트');
  });

  expect(toastFn).toHaveBeenCalledWith({
    title: '일정 삭제 실패',
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
});
