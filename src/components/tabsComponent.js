import { Tab, TabList } from '@fluentui/react-components'
import React from 'react'

export default function TabsComponent() {
  return (
    <div>
      <TabList>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
    </div>
  )
}
