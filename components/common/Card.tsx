import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  children,
  className = '',
  onClick,
}) => {
  // Base styles for the card
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200';
  
  // Add hover styles if onClick is provided
  const interactiveStyles = onClick 
    ? 'cursor-pointer hover:shadow-lg hover:scale-105 transform' 
    : '';
  
  // Combine all styles
  const cardStyles = [
    baseStyles,
    interactiveStyles,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <div 
      className={cardStyles}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
        )}
        
        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        )}
        
        {/* Custom Children Content */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;