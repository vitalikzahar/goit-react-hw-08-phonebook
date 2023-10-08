import { Section } from 'components/App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { PhoneForm } from 'components/PhoneForm/PhoneForm';

export const PhoneBook = () => {
  return (
    <Section>
      <h1>Phone book</h1>
      <PhoneForm></PhoneForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <Contacts></Contacts>
    </Section>
  );
};
