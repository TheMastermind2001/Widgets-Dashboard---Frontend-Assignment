export function toCamelCase(s:string) {
    // Check if the input is a string and not empty
    if (typeof s !== 'string' || s.length === 0) return s;
  
    // Convert the first character to uppercase and the rest to lowercase
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}