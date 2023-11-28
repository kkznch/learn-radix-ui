import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';
import { MyAlertDialog } from './components/MyAlertDialog';
import { MyAspectRatio } from './components/MyAspectRatio';

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
    </>
  );
};

export default App;
