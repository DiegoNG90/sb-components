import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Enables allCaps mode for the text label
   */
  allCaps?: boolean;
  /**
   * Type of color for font
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  const labelToDisplay = allCaps ? label.toUpperCase() : label;

  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {labelToDisplay}
    </span>
  );
};
