export const getStringDate = (date) => {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }
  return ""; // 날짜가 아닌 경우 빈 문자열 반환
};
