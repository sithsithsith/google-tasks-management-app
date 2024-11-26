import { useMemo } from "react";

export type WeekDay = {
  name: string;
  date: string;
  active: boolean;
  blur: boolean;
};

export default function useCalender() {
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
  };
}
