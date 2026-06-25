// function formatCurrency(value, currency = 'USD') {
//   try {
//     // Validate that value is a number
//     if (typeof value !== 'number' && typeof value !== 'string') {
//       throw new Error('Value must be a number or numeric string');
//     }
 
//     // Convert to number if string
//     const numValue = typeof value === 'string' ? parseFloat(value) : value;
 
//     // Check if conversion was successful
//     if (isNaN(numValue)) {
//       throw new Error('Value could not be converted to a valid number');
//     }
 
//     // Use Intl.NumberFormat for proper currency formatting
//     const formatter = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: currency.toUpperCase(),
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
 
//     return formatter.format(numValue);
//   } catch (error) {
//     // Fallback: format with USD if currency is invalid or error occurs
//     console.warn(`Currency formatting error: ${error.message}. Falling back to USD.`);
    
//     try {
//       const numValue = typeof value === 'string' ? parseFloat(value) : value;
      
//       if (isNaN(numValue)) {
//         return '$0.00';
//       }
 
//       const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//       });
 
//       return formatter.format(numValue);
//     } catch {
//       // Last resort fallback
//       return '$0.00';
//     }
//   }
// }
 
// // Example usage
// console.log(formatCurrency(1234.5));           // $1,234.50
// console.log(formatCurrency(1234.5, 'USD'));    // $1,234.50
// console.log(formatCurrency(1234.5, 'EUR'));    // €1,234.50
// console.log(formatCurrency(1234.5, 'GBP'));    // £1,234.50
// console.log(formatCurrency('5000.99'));        // $5,000.99
// console.log(formatCurrency(42));               // $42.00
// console.log(formatCurrency(0.1));              // $0.10
// console.log(formatCurrency('invalid', 'USD')); // $0.00 (fallback)
// console.log(formatCurrency(1000, 'INVALID'));  // $1,000.00 (fallback to USD)
 
// // Export for use as a module
// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = formatCurrency;
// }

import dayjs from 'dayjs';

export const formatCurrency = (value: number, currency: string = 'USD') => {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }catch (error) {
        const formattedValue = value.toFixed(2);
        return `$${formattedValue}`; // Fallback to USD format
    }
}

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};