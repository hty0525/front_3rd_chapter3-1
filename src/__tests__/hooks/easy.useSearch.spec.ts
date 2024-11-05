import { act, renderHook } from '@testing-library/react';

import { useSearch } from '../../hooks/useSearch.ts';
import { mockEvents } from '../unit/mock.ts';

it('검색어가 비어있을 때 모든 이벤트를 반환해야 한다', () => {
  const { result } = renderHook(() => useSearch(mockEvents, new Date('2024-03-01'), 'month'));
  expect(result.current.filteredEvents).toEqual([
    mockEvents[0],
    mockEvents[1],
    mockEvents[2],
    mockEvents[3],
    mockEvents[4],
    mockEvents[5],
  ]);
});

it('검색어에 맞는 이벤트만 필터링해야 한다', () => {
  const { result } = renderHook(() => useSearch(mockEvents, new Date('2024-03-01'), 'month'));
  act(() => result.current.setSearchTerm('회의'));
  expect(result.current.filteredEvents).toEqual([
    mockEvents[0],
    mockEvents[1],
    mockEvents[4],
    mockEvents[5],
  ]);
});

it('검색어가 제목, 설명, 위치 중 하나라도 일치하면 해당 이벤트를 반환해야 한다', () => {
  const { result } = renderHook(() => useSearch(mockEvents, new Date('2024-03-01'), 'month'));

  act(() => result.current.setSearchTerm('회의실'));

  expect(result.current.filteredEvents).toEqual([
    mockEvents[0],
    mockEvents[1],
    mockEvents[4],
    mockEvents[5],
  ]);
});

it('현재 뷰(주간/월간)에 해당하는 이벤트만 반환해야 한다', () => {
  const { result } = renderHook(() => useSearch(mockEvents, new Date('2024-03-01'), 'week'));
  act(() => result.current.setSearchTerm('회의실'));
  expect(result.current.filteredEvents).toEqual([]);

  const { result: result2 } = renderHook(() =>
    useSearch(mockEvents, new Date('2024-03-01'), 'month')
  );
  act(() => result2.current.setSearchTerm('회의실'));
  expect(result2.current.filteredEvents).toEqual([
    mockEvents[0],
    mockEvents[1],
    mockEvents[4],
    mockEvents[5],
  ]);
});

it("검색어를 '회의'에서 '점심'으로 변경하면 필터링된 결과가 즉시 업데이트되어야 한다", () => {
  const { result } = renderHook(() => useSearch(mockEvents, new Date('2024-03-01'), 'month'));
  act(() => result.current.setSearchTerm('회의'));
  expect(result.current.filteredEvents).toEqual([
    mockEvents[0],
    mockEvents[1],
    mockEvents[4],
    mockEvents[5],
  ]);
  act(() => result.current.setSearchTerm('점심'));
  expect(result.current.filteredEvents).toEqual([]);
});
