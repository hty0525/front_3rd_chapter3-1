import { Event } from '../../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: '팀 미팅',
    date: '2024-03-20',
    startTime: '10:00',
    endTime: '11:30',
    description: '주간 팀 미팅',
    location: '회의실 A',
    category: '업무',
    repeat: {
      type: 'weekly',
      interval: 1,
      endDate: '2024-06-20',
    },
    notificationTime: 30,
  },
  {
    id: '9',
    title: '팀 미팅',
    date: '2024-03-20',
    startTime: '10:00',
    endTime: '18:30',
    description: '개발 팀 미팅',
    location: '회의실 B',
    category: '업무',
    repeat: {
      type: 'weekly',
      interval: 2,
      endDate: '2024-06-25',
    },
    notificationTime: 30,
  },
  {
    id: '2',
    title: '생일 파티',
    date: '2024-03-25',
    startTime: '18:00',
    endTime: '21:00',
    description: '친구 생일 파티',
    location: '레스토랑 xyz',
    category: '개인',
    repeat: {
      type: 'none',
      interval: 0,
    },
    notificationTime: 60,
  },
  {
    id: '3',
    title: '병원 예약',
    date: '2024-03-22',
    startTime: '14:00',
    endTime: '15:00',
    description: '정기 검진',
    location: '서울 중앙 병원',
    category: '건강',
    repeat: {
      type: 'monthly',
      interval: 3,
      endDate: '2024-12-22',
    },
    notificationTime: 120,
  },
];

export const mockNewEvent: Event = {
  id: '5',
  title: '팀 미팅',
  date: '2024-03-20',
  startTime: '09:00',
  endTime: '18:30',
  description: '주간 팀 미팅',
  location: '회의실 A',
  category: '업무',
  repeat: {
    type: 'weekly',
    interval: 1,
    endDate: '2024-06-20',
  },
  notificationTime: 30,
};

export const mockNewEventNoOverLapping: Event = {
  id: '5',
  title: '팀 미팅',
  date: '2024-04-20',
  startTime: '09:00',
  endTime: '18:30',
  description: '주간 팀 미팅',
  location: '회의실 A',
  category: '업무',
  repeat: {
    type: 'weekly',
    interval: 1,
    endDate: '2024-06-20',
  },
  notificationTime: 30,
};
