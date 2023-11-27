import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';

const App: FC = () => {
  return (
    <>
      <section>
        <h1>アコーディオン</h1>
        <MyAccordion />
      </section>
    </>
  );
};

export default App;
