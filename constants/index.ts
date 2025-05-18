// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    PROPERTIES: '/properties',
    BOOKINGS: '/bookings',
    USERS: '/users',
    SEARCH: '/search',
  },
  TIMEOUT: 10000, 
};

// UI Text Constants
export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    LEARN_MORE: 'Learn More',
    CONTACT_US: 'Contact Us',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
    EDIT: 'Edit',
    SEARCH: 'Search',
    APPLY_FILTERS: 'Apply Filters',
    CLEAR_FILTERS: 'Clear Filters',
  },
  MESSAGES: {
    LOADING: 'Loading...',
    NO_RESULTS: 'No results found',
    ERROR_GENERIC: 'Something went wrong. Please try again.',
    SUCCESS_BOOKING: 'Booking request submitted successfully!',
    CONFIRM_DELETE: 'Are you sure you want to delete this item?',
  },
  PLACEHOLDERS: {
    SEARCH: 'Search properties...',
    EMAIL: 'Enter your email',
    PHONE: 'Enter your phone number',
    NAME: 'Enter your name',
    MESSAGE: 'Enter your message',
  },
};
