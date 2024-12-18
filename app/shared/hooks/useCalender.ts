import { useMemo } from "react";
import { WeekDay } from "~/ts/core";

export default function useCalender() {
  const getTodayDateAndTime = (): { date: string; time: string } => {
    const now = new Date();
    const optionsDate: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date: string = now.toLocaleDateString("en-US", optionsDate);
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const time: string = now.toLocaleTimeString("en-US", optionsTime);
    return { date, time };
  };

  const getWeekDays = (): WeekDay[] => {
    const days = useMemo(() => {
      const today = new Date();
      const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

      const result: WeekDay[] = [];
      for (let i = -5; i <= 1; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const day: WeekDay = {
          name: daysOfWeek[date.getDay()],
          date: date.getDate().toString().padStart(2, "0"),
          active: i === 0,
          blur: i === -5 || i === 1,
        };

        result.push(day);
      }
      return result;
    }, []);

    return days;
  };

  return {
    getWeekDays,
    getTodayDateAndTime,
  };
}
