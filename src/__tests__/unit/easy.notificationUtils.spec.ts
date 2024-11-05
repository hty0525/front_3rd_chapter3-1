import { mockEvents } from './mock';
import { createNotificationMessage, getUpcomingEvents } from '../../utils/notificationUtils';

describe('getUpcomingEvents', () => {
  it('알림 시간이 정확히 도래한 이벤트를 반환한다', () => {
    const now = new Date('2024-03-20 9:30');
    expect(getUpcomingEvents(mockEvents, now, [])).toEqual([
      mockEvents[0],
      mockEvents[1],
      mockEvents[4],
      mockEvents[5],
    ]);
  });

  it('이미 알림이 간 이벤트는 제외한다', () => {
    const now = new Date('2024-03-20 10:00');
    expect(getUpcomingEvents(mockEvents, now, [])).toEqual([]);
  });

  it('알림 시간이 아직 도래하지 않은 이벤트는 반환하지 않는다', () => {
    const now = new Date('2024-03-20 9:00');
    expect(getUpcomingEvents(mockEvents, now, [])).toEqual([]);
  });

  it('알림 시간이 지난 이벤트는 반환하지 않는다', () => {
    const now = new Date('2024-03-20 10:30');
    expect(getUpcomingEvents(mockEvents, now, [])).toEqual([]);
  });
});

describe('createNotificationMessage', () => {
  it('올바른 알림 메시지를 생성해야 한다', () => {
    expect(createNotificationMessage(mockEvents[0])).toBe('30분 후 팀 미팅 일정이 시작됩니다.');
  });
});
