export const getPrefix = (date: any) => {
  return date == "01" ? "st" : date == "02" ? "nd" : date == "03" ? "rd" : "th";
};
