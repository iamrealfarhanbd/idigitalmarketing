import ContactForm from '../components/contactpage/ContactForm';
import ContactHeader from '../components/contactpage/ContactHeader';
import ContactInfo from '../components/contactpage/ContactInfo';
import ContactMap from '../components/contactpage/ContactMap';

const contact = () => {
    return (
        <div>
            <ContactHeader />
            <ContactForm />
            <ContactInfo />
            <ContactMap />
        </div>
    );
};

export default contact;