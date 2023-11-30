import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';
import { MyAlertDialog } from './components/MyAlertDialog';
import { MyAspectRatio } from './components/MyAspectRatio';
import { MyAvatar } from './components/MyAvatar';
import { MyCheckbox } from './components/MyCheckbox';
import { MyCollapsible } from './components/MyCollapsible';
import { MyContextMenu } from './components/MyContextMenu';
import { MyDialog } from './components/MyDialog';
import { MyHoverCard } from './components/MyHoverCard';
import { MyNavigationMenu } from './components/MyNavigationMenu';
import { MySlider } from './components/MySlider';
import { MyToast } from './components/MyToast';

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
      <section>
        <h1>Dialog</h1>
        <MyDialog />
      </section>
      <section>
        <h1>Hover card</h1>
        <MyHoverCard />
      </section>
      <section>
        <h1>Navigation menu</h1>
        <MyNavigationMenu />
      </section>
      <section style={{ backgroundColor: 'pink' }}>
        <h1>Slider</h1>
        <MySlider />
      </section>
      <section>
        <h1>Toast</h1>
        <MyToast />
      </section>
    </>
  );
};

export default App;
