import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Dropdown,
    Input,
    Label,
    makeStyles,
    Option,
    useId,
  } from "@fluentui/react-components";


export default function AccordionComponent() {
    const dropdownId = useId("dropdown-default")
    const options = [
      "Cat",
      "Caterpillar",
      "Corgi",
      "Chupacabra",
      "Dog",
      "Ferret",
      "Fish",
      "Fox",
      "Hamster",
      "Snake"
    ]
    const inputId = useId("input");

  return (
    <div>
       <Accordion>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>

<div className='py-3'>
  <label id={dropdownId}>Best pet</label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Select an animal"
      >
        {options.map(option => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>

</div>

        <div>
        <div className='py-3'>
      <Label htmlFor={inputId}>
        Sample input
      </Label>
      <Input id={inputId} />
    </div>
        </div>
    </div>
  )
}
