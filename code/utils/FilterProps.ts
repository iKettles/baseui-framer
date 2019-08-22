export const filterProps = (props: any, keysToFilter: string[]) => {
  const filteredProps = {...props};
  for(const key of keysToFilter) {
    if(filteredProps.hasOwnProperty(key)) {
      delete filteredProps[key]
    }
  }
  return filteredProps
};
