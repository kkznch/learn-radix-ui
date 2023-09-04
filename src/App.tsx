import type { FC } from 'react';
import { MyAccordion } from './components/MyAccordion';
import { MyPopover } from './components/MyPopover';

const App: FC = () => {
  return (
    <>
      <MyPopover />
      <MyAccordion />
    </>
  );
};

export default App;
