export const setRefClassName = (ref, className) => {
  if (ref.current) {
    ref.current.className = className;
  }
};
