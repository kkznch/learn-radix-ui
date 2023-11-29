import { useState } from 'react';
import './style.css';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

export const MyContextMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState('pedro');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ContextMenuTrigger">
        ここで右クリックをするのだ
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="ContextMenuContent">
          <ContextMenu.Item className="ContextMenuItem">
            Back <div className="RightSlot">⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="ContextMenuItem">
            Forward <div className="RightSlot">⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item className="ContextMenuItem">
            Reload <div className="RightSlot">⌘+R</div>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent sideOffset={5} className="ContextMenuSubContent">
                <ContextMenu.Item className="ContextMenuItem">
                  Save Page As... <div className="RightSlot">⌘+S</div>
                </ContextMenu.Item>
                <ContextMenu.Item className="ContextMenuItem">Create Shortcut...</ContextMenu.Item>
                <ContextMenu.Item className="ContextMenuItem">Name Window...</ContextMenu.Item>
                <ContextMenu.Separator className="ContextMenuSeparator" />
                <ContextMenu.Item className="ContextMenuItem">Developer Tools</ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator className="ContextMenuSeparator" />
          <ContextMenu.CheckboxItem
            className="ContextMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </ContextMenu.CheckboxItem>{' '}
          <ContextMenu.CheckboxItem
            className="ContextMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator className="ContextMenuSeparator" />
          <ContextMenu.Label className="ContextMenuLabel">People</ContextMenu.Label>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem className="ContextMenuRadioItem" value="pedro">
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem className="ContextMenuRadioItem" value="colm">
              <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
