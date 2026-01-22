export function convertToPrintSpecification(key) {
    let result = key.replace(/_/g, ' ');
    result = result.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return result;
  }