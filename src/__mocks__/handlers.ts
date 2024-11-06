import { http, HttpResponse } from 'msw';

import { Event, EventForm } from '../types';
import { events } from './response/events.json' assert { type: 'json' };

// ! HARD
// ! 각 응답에 대한 MSW 핸들러를 작성해주세요. GET 요청은 이미 작성되어 있는 events json을 활용해주세요.
export const handlers = [
  http.get('/api/events', () => {
    return HttpResponse.json({ events });
  }),

  http.post('/api/events', async ({ request }) => {
    const newEvent = (await request.json()) as EventForm;
    // UUID로 하니 테스트 코드가 항상 변경되는 이슈로 UUID말고 숫자로 변경
    events.push({ id: String(events.length + 1), ...newEvent });
    return HttpResponse.json({ events }, { status: 201 });
  }),

  http.put('/api/events/:id', async ({ request, params }) => {
    const { id } = params;
    const updatedEvent = (await request.json()) as Event;
    const targetIndex = events.findIndex((event) => event.id === id);
    events[targetIndex] = updatedEvent;
    return HttpResponse.json({ events });
  }),

  http.delete('/api/events/:id', ({ params }) => {
    const { id } = params;
    const targetIndex = events.findIndex((event) => event.id === id);
    events.splice(targetIndex, 1);

    return HttpResponse.json({ events });
  }),
];
