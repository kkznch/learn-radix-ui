import * as Accordion from '@radix-ui/react-accordion';
import { styled } from '@stitches/react';

const StyledItem = styled(Accordion.Item, {
  borderBottom: '1px solid gainsboro',
  '&[data-state=open]': {
    borderBottomWidth: '2px',
  },
});

export const MyAccordion = () => (
  <Accordion.Root type="single">
    <StyledItem value="item-1" />
  </Accordion.Root>
);
