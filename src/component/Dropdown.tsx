import { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };
  
  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Please select according to gender</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;