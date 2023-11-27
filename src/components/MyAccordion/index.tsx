import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import './style.css';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

export const MyAccordion = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.AccordionItem className="AccordionItem" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design patter.</AccordionContent>
    </Accordion.AccordionItem>
    <Accordion.AccordionItem className="AccordionItem" value="item-2">
      <AccordionTrigger>これはアコーディオンですか</AccordionTrigger>
      <AccordionContent>そうです！！！！！！！！！！！！！！！！！！</AccordionContent>
    </Accordion.AccordionItem>
    <Accordion.AccordionItem className="AccordionItem" value="item-3">
      <AccordionTrigger>これもアコーディオンですか？ほげほげ</AccordionTrigger>
      <AccordionContent>ふがふがぁ...</AccordionContent>
    </Accordion.AccordionItem>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<HTMLButtonElement, any>(
  ({ children, className, ...props }, forwardRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron"></ChevronDownIcon>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef<HTMLDivElement, any>(
  ({ children, className, ...props }, forwardRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
