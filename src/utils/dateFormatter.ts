export function dateFormatter(ms : number) {
    const date = new Date(ms);
    return date.toDateString();
}
  
export const getCurrentYear = () => new Date().getFullYear();