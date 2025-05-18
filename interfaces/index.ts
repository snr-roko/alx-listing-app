export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}