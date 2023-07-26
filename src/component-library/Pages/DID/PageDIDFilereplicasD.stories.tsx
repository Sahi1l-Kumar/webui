import { StoryFn, Meta } from '@storybook/react';
import { PageDIDFilereplicasD as PDFD } from "./PageDIDFilereplicasD"
import { fixtureFilereplicaStateViewModel, fixtureFilereplicaStateDViewModel, mockUseComDOM } from 'test/fixtures/table-fixtures';

export default {
    title: "Components/Pages/DID",
    component: PDFD,
} as Meta<typeof PDFD>;

const Template: StoryFn<typeof PDFD> = (args) => <PDFD {...args} />;

export const PageDIDFilereplicasD = Template.bind({});
PageDIDFilereplicasD.args = {
    replicaComDOM: mockUseComDOM(Array.from({length: 100}, (_, i) => fixtureFilereplicaStateViewModel())),
    datasetComDOM: mockUseComDOM(Array.from({length: 100}, (_, i) => fixtureFilereplicaStateDViewModel())),
    onChangeDatasetSelection: (dataset: string) => console.log("onChangeDatasetSelection", dataset),
}