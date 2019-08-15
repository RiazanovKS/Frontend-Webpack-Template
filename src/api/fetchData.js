export const fetchData = () => dispatch => {
  return new Promise((resolve, reject) => setTimeout(resolve(10), 2000))
}
