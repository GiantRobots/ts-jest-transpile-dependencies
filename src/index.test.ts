import addDays from "date-fns/esm/addDays";
import { foo } from "./index";

describe("index", () => {
  it("#foo should return a Date with 2 days in the future", () => {
    const acutal = foo().getDate();
    const expected = addDays(new Date(), 2).getDate();
    expect(acutal).toEqual(expected);
  });
});
