import { Container } from 'components/App/App.styled'
import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactsTitle, SectionPage } from 'components/ContactForm/ContactForm.styled'
import ContactList from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
import React from 'react'

const Contacts = () => {
  return (
    <Container>
        <SectionPage>
        <ContactsTitle> My contacts</ContactsTitle>
        <ContactForm/>
        <Filter/>
       <ContactList/>
       </SectionPage>
    </Container>)}



export default Contacts
