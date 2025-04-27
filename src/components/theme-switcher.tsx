import { useState } from "react";

type Props = {
  onChange: () => void;
};

const ThemeSwitcher = ({ onChange }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(prev => !prev);
    onChange();
    console.log(checked)
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default ThemeSwitcher;
