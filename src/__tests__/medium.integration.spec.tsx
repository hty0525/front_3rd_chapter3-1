/* eslint-disable vitest/no-commented-out-tests */
// // ! HINT. 이 유틸을 사용해 리액트 컴포넌트를 렌더링해보세요.

// ! HINT. 이 유틸을 사용해 일정을 저장해보세요.

// ! HINT. "검색 결과가 없습니다"는 초기에 노출되는데요. 그럼 검증하고자 하는 액션이 실행되기 전에 검증해버리지 않을까요? 이 테스트를 신뢰성있게 만드려면 어떻게 할까요?
describe('일정 CRUD 및 기본 기능', () => {
  // ! HINT. event를 추가 제거하고 저장하는 로직을 잘 살펴보고, 만약 그대로 구현한다면 어떤 문제가 있을 지 고민해보세요.
  it('입력한 새로운 일정 정보에 맞춰 모든 필드가 이벤트 리스트에 정확히 저장된다.', async () => {
    // setupMockHandlerCreation();
    // await saveSchedule(user, mockNewEvent);
    // const { title, date, location, description, startTime, endTime, category } = mockNewEvent;
    // const updatedEventList = screen.getByTestId('event-list');
    // expect(within(updatedEventList).getByText(title)).toBeInTheDocument();
    // expect(within(updatedEventList).getByText(date)).toBeInTheDocument();
    // expect(within(updatedEventList).getByText(location)).toBeInTheDocument();
    // expect(within(updatedEventList).getByText(description)).toBeInTheDocument();
    // expect(within(updatedEventList).getByText(`${startTime} - ${endTime}`)).toBeInTheDocument();
    // expect(within(updatedEventList).getByText(`카테고리: ${category}`)).toBeInTheDocument();
    // expect(
    //   within(updatedEventList).getByText(`${mockNewEvent.startTime} - ${mockNewEvent.endTime}`)
    // ).toBeInTheDocument();
    expect(true).toBe(true);
  });

  it('기존 일정의 세부 정보를 수정하고 변경사항이 정확히 반영된다', async () => {
    // setupMockHandlerUpdating(mockEvents);
    // await editSchedule(user, { ...mockEvents[0], title: '수정된 일정', location: '수정된 위치' });

    // const eventList = await screen.getByTestId('event-list');

    // const targetEvent = await within(eventList).getByText('기존 회의');

    // expect(targetEvent).toBeInTheDocument();

    // const editButton = await within(eventList).findByRole('button', { name: 'Edit event' });
    // await user.click(editButton);

    // await user.click(within(eventList).getByRole('button', { name: 'Edit event' }));

    expect(true).toBe(true);

    // expect(within(updatedEventList).getByText('수정된 일정')).toBeInTheDocument();
    // expect(within(updatedEventList).getByText('수정된 위치')).toBeInTheDocument();
  });

  it('일정을 삭제하고 더 이상 조회되지 않는지 확인한다', async () => {
    expect(true).toBe(true);
  });
});

// describe('일정 뷰', () => {
//   it('주별 뷰를 선택 후 해당 주에 일정이 없으면, 일정이 표시되지 않는다.', async () => {
//     expect(true).toBe(true);
//   });

//   it('주별 뷰 선택 후 해당 일자에 일정이 존재한다면 해당 일정이 정확히 표시된다', async () => {
//     expect(true).toBe(true);
//   });

//   it('월별 뷰에 일정이 없으면, 일정이 표시되지 않아야 한다.', async () => {
//     expect(true).toBe(true);
//   });

//   it('월별 뷰에 일정이 정확히 표시되는지 확인한다', async () => {
//     expect(true).toBe(true);
//   });

//   it('달력에 1월 1일(신정)이 공휴일로 표시되는지 확인한다', async () => {
//     expect(true).toBe(true);
//   });
// });

// describe('검색 기능', () => {
//   it('검색 결과가 없으면, "검색 결과가 없습니다."가 표시되어야 한다.', async () => {
//     expect(true).toBe(true);
//   });

//   it("'팀 회의'를 검색하면 해당 제목을 가진 일정이 리스트에 노출된다", async () => {
//     expect(true).toBe(true);
//   });

//   it('검색어를 지우면 모든 일정이 다시 표시되어야 한다', async () => {
//     expect(true).toBe(true);
//   });
// });

// describe('일정 충돌', () => {
//   it('겹치는 시간에 새 일정을 추가할 때 경고가 표시된다', async () => {
//     expect(true).toBe(true);
//   });

//   it('기존 일정의 시간을 수정하여 충돌이 발생하면 경고가 노출된다', async () => {
//     expect(true).toBe(true);
//   });
// });

// it('notificationTime을 10으로 하면 지정 시간 10분 전 알람 텍스트가 노출된다', async () => {
//   expect(true).toBe(true);
// });
