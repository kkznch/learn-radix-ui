import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';
import { MyAlertDialog } from './components/MyAlertDialog';

const App: FC = () => {
  return (
    <>
      <section>
        <h1>アコーディオン</h1>
        <MyAccordion />
      </section>
      <section>
        <h1>アラートダイアログ</h1>
        <MyAlertDialog />
      </section>
    </>
  );
};

export default App;
