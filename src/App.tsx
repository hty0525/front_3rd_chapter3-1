import { BellIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
  Tooltip,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { AddOrEdit } from './feature/addOrEdit/index.tsx';
import { Calendar } from './feature/calendar/index.tsx';
import { useNotifications } from './hooks/useNotifications.ts';
import { useSearch } from './hooks/useSearch.ts';
import { useCombinedContext } from './provider/combinedContext.tsx';
import { Event, EventForm, RepeatType } from './types';

function App() {
  const { view, currentDate } = useCombinedContext();
  // const { searchTerm, filteredEvents, setSearchTerm } = useSearch(events, currentDate, view);

  // const [isOverlapDialogOpen, setIsOverlapDialogOpen] = useState(false);
  // const [overlappingEvents, setOverlappingEvents] = useState<Event[]>([]);
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <Box w="full" h="100vh" m="auto" p={5}>
      <Flex gap={6} h="full">
        <AddOrEdit />
        <Calendar />

        {/* <VStack data-testid="event-list" w="500px" h="full" overflowY="auto">
          <FormControl>
            <FormLabel>일정 검색</FormLabel>
            <Input
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormControl>

          {filteredEvents.length === 0 ? (
            <Text>검색 결과가 없습니다.</Text>
          ) : (
            filteredEvents.map((event) => (
              <Box key={event.id} borderWidth={1} borderRadius="lg" p={3} width="100%">
                <HStack justifyContent="space-between">
                  <VStack align="start">
                    <HStack>
                      {notifiedEvents.includes(event.id) && <BellIcon color="red.500" />}
                      <Text
                        fontWeight={notifiedEvents.includes(event.id) ? 'bold' : 'normal'}
                        color={notifiedEvents.includes(event.id) ? 'red.500' : 'inherit'}
                      >
                        {event.title}
                      </Text>
                    </HStack>
                    <Text>{event.date}</Text>
                    <Text>
                      {event.startTime} - {event.endTime}
                    </Text>
                    <Text>{event.description}</Text>
                    <Text>{event.location}</Text>
                    <Text>카테고리: {event.category}</Text>
                    {event.repeat.type !== 'none' && (
                      <Text>
                        반복: {event.repeat.interval}
                        {event.repeat.type === 'daily' && '일'}
                        {event.repeat.type === 'weekly' && '주'}
                        {event.repeat.type === 'monthly' && '월'}
                        {event.repeat.type === 'yearly' && '년'}
                        마다
                        {event.repeat.endDate && ` (종료: ${event.repeat.endDate})`}
                      </Text>
                    )}
                    <Text>
                      알림:{' '}
                      {
                        notificationOptions.find(
                          (option) => option.value === event.notificationTime
                        )?.label
                      }
                    </Text>
                  </VStack>
                  <HStack>
                    <IconButton
                      aria-label="Edit event"
                      icon={<EditIcon />}
                      onClick={() => editEvent(event)}
                    />
                    <IconButton
                      aria-label="Delete event"
                      icon={<DeleteIcon />}
                      onClick={() => deleteEvent(event.id)}
                    />
                  </HStack>
                </HStack>
              </Box>
            ))
          )}
        </VStack> */}
      </Flex>

      {/* <AlertDialog
        isOpen={isOverlapDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsOverlapDialogOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              일정 겹침 경고
            </AlertDialogHeader>

            <AlertDialogBody>
              다음 일정과 겹칩니다:
              {overlappingEvents.map((event) => (
                <Text key={event.id}>
                  {event.title} ({event.date} {event.startTime}-{event.endTime})
                </Text>
              ))}
              계속 진행하시겠습니까?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsOverlapDialogOpen(false)}>
                취소
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  setIsOverlapDialogOpen(false);
                  saveEvent({
                    id: editingEvent ? editingEvent.id : undefined,
                    title,
                    date,
                    startTime,
                    endTime,
                    description,
                    location,
                    category,
                    repeat: {
                      type: isRepeating ? repeatType : 'none',
                      interval: repeatInterval,
                      endDate: repeatEndDate || undefined,
                    },
                    notificationTime,
                  });
                }}
                ml={3}
              >
                계속 진행
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> */}

      {/* {notifications.length > 0 && (
        <VStack position="fixed" top={4} right={4} spacing={2} align="flex-end">
          {notifications.map((notification, index) => (
            <Alert key={index} status="info" variant="solid" width="auto">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle fontSize="sm">{notification.message}</AlertTitle>
              </Box>
              <CloseButton
                onClick={() => setNotifications((prev) => prev.filter((_, i) => i !== index))}
              />
            </Alert>
          ))}
        </VStack>
      )} */}
    </Box>
  );
}

export default App;
