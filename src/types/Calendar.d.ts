export type CalendarItem = {
    title: string;
    allDay?: boolean | undefined;
    start: Date | null;
    end: Date | null;
    desc?: string | undefined;
    id?: number | undefined;
    tooltip?: string | undefined;
    color?: string | undefined;
};
