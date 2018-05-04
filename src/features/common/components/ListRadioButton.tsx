import * as React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import CheckboxChecked from 'material-ui/svg-icons/toggle/check-box';
import CheckboxUnchecked from 'material-ui/svg-icons/toggle/check-box-outline-blank';

type Props = {
  value: string;
  checked: boolean;
  onClick: (value: string) => void;
  primaryText: React.ReactNode;
  checkbox?: boolean;
};

const ListRadioButton = ({
  value,
  checked,
  onClick,
  primaryText,
  checkbox
}: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>): void =>
    onClick(value);
  return (
    <ListItem
      primaryText={primaryText}
      onClick={handleClick}
      leftIcon={
        <Checkbox
          checked={checked}
          checkedIcon={checkbox ? <CheckboxChecked /> : <RadioChecked />}
          uncheckedIcon={checkbox ? <CheckboxUnchecked /> : <RadioUnchecked />}
        />
      }
    />
  );
};

export default ListRadioButton;
