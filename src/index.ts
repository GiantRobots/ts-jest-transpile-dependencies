import addDays from "date-fns/esm/addDays";

export function foo(): Date {
  return addDays(new Date(), 2);
}
