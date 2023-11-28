import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import './style.css';
import { CheckIcon } from '@radix-ui/react-icons';

export const MyCheckbox = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        チェックする
      </label>
    </div>
  </form>
);
