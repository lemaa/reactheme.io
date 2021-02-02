export type CalendarItem = {
    title: string;
    allDay?: boolean;
    start: Date;
    end: Date;
    desc?: string;
    id?: number;
    tooltip?: string;
    color?: string;
  };