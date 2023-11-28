import { useState } from 'react';
import './style.css';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons';

export const MyCollapsible = () => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button className="IconButton">{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
      </Collapsible.Trigger>
      <div className="Repository">
        <span className="Text">けけずん</span>
      </div>
      <Collapsible.Content>
        <div className="Repository">
          <span className="Text">けけけけ</span>
        </div>
        <div className="Repository">
          <span className="Text">ずんずん</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
