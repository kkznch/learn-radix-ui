import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';
import { MyAlertDialog } from './components/MyAlertDialog';
import { MyAspectRatio } from './components/MyAspectRatio';
import { MyAvatar } from './components/MyAvatar';
import { MyCheckbox } from './components/MyCheckbox';
import { MyCollapsible } from './components/MyCollapsible';
import { MyContextMenu } from './components/MyContextMenu';

const App: FC = () => {
  return (
    <>
      <section>
        <h1>Accordion</h1>
        <MyAccordion />
      </section>
      <section>
        <h1>Alert dialog</h1>
        <MyAlertDialog />
      </section>
      <section>
        <h1>Aspect ratio</h1>
        <MyAspectRatio />
      </section>
      <section>
        <h1>Avatar</h1>
        <MyAvatar />
      </section>
      <section>
        <h1>Checkbox</h1>
        <MyCheckbox />
      </section>
      <section>
        <h1>Collapsible</h1>
        <MyCollapsible />
      </section>
      <section>
        <h1>Context menu</h1>
        <MyContextMenu />
      </section>
    </>
  );
};

export default App;
