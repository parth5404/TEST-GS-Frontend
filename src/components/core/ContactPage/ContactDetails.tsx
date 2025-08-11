import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail size={24} />,
    heading: 'Chat with Us',
    description: 'Our friendly team is here to help.',
    details: 'gsacademia5404@gmail.com',
  },
  {
    icon: <MapPin size={24} />,
    heading: 'Visit Us',
    description: 'Come and say hello at our office HQ.',
    details: '23, Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003',
  },
  {
    icon: <Phone size={24} />,
    heading: 'Call Us',
    description: 'Mon - Fri From 8am to 5pm',
    details: '+123 456 7869',
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      {contactDetails.map((data, ind) => (
        <div key={ind} className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-full">
            {data.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">{data.heading}</h3>
            <p className="text-base-content/80 text-sm mt-1">{data.description}</p>
            <a href={data.heading === 'Chat with Us' ? `mailto:${data.details}` : data.heading === 'Call Us' ? `tel:${data.details}` : '#'}
               className="text-primary font-medium text-sm mt-1 hover:underline">
              {data.details}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
