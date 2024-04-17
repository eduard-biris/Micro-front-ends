import { TimelineData, TimelineEvent } from 'types/visualizations';

export const groupEventsByDate = (events: TimelineEvent[]): { [date: string]: TimelineEvent[] } => {
    const groupedEvents: { [date: string]: TimelineEvent[] } = {};
  
    return events.reduce((groupedEv, event) => {
      const { date } = event;
  
      if (!groupedEv[date]) {
        groupedEvents[date] = [];
      }
  
      groupedEvents[date]?.push(event);
  
      return groupedEvents;
    }, groupedEvents);
};