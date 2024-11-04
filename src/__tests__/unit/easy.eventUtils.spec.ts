import { mockEvents } from './mock';
import { getFilteredEvents } from '../../utils/eventUtils';

describe('getFilteredEvents', () => {
  it("검색어 '이벤트 2'에 맞는 이벤트만 반환한다", () => {
    expect(getFilteredEvents(mockEvents, '이벤트 2', new Date('2024-03-20'), 'week')).toEqual([
      mockEvents[1],
      mockEvents[5],
    ]);
  });

  it('주간 뷰에서 2024-07-01 주의 이벤트만 반환한다', () => {
    expect(getFilteredEvents(mockEvents, '', new Date('2024-07-01'), 'week')).toEqual([
      mockEvents[6],
    ]);
  });

  it('월간 뷰에서 2024년 7월의 모든 이벤트를 반환한다', () => {
    expect(getFilteredEvents(mockEvents, '', new Date('2024-07-01'), 'month')).toEqual([
      mockEvents[6],
      mockEvents[7],
      mockEvents[8],
    ]);
  });

  it("검색어 '이벤트'와 주간 뷰 필터링을 동시에 적용한다", () => {
    expect(getFilteredEvents(mockEvents, '이벤트', new Date('2024-07-01'), 'week')).toEqual([
      mockEvents[6],
    ]);
  });

  it('검색어가 없을 때 모든 이벤트를 반환한다', () => {
    expect(getFilteredEvents(mockEvents, '', new Date('2024-07-01'), 'month')).toEqual([
      mockEvents[6],
      mockEvents[7],
      mockEvents[8],
    ]);
  });

  it('검색어가 대소문자를 구분하지 않고 작동한다', () => {
    expect(getFilteredEvents(mockEvents, 'event', new Date('2024-07-01'), 'month')).toEqual([
      mockEvents[7],
      mockEvents[8],
    ]);
  });

  it('월의 경계에 있는 이벤트를 올바르게 필터링한다', () => {
    expect(getFilteredEvents(mockEvents, '', new Date('2024-07-01'), 'week')).toEqual([
      mockEvents[6],
    ]);
  });

  it('빈 이벤트 리스트에 대해 빈 배열을 반환한다', () => {
    expect(getFilteredEvents([], '', new Date('2024-07-01'), 'week')).toEqual([]);
  });
});
