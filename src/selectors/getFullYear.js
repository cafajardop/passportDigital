

export const getFullYear =() =>{
  let newDate = new Date()
  let year = newDate.getFullYear();
  return `Pasaporte Digital ${year}`;
}