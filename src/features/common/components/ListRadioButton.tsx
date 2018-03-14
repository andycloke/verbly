import * as React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';

type Props = {
  value: string;
  checked: boolean;
  onClick: (value: string) => void;
  primaryText: React.ReactNode;
};

const ListRadioButton = ({ value, checked, onClick, primaryText }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>): void =>
    onClick(value);
  return (
    <ListItem
      primaryText={primaryText}
      onClick={handleClick}
      leftIcon={
        <Checkbox
          checked={checked}
          checkedIcon={<RadioChecked />}
          uncheckedIcon={<RadioUnchecked />}
        />
      }
    />
  );
};

export default ListRadioButton;
