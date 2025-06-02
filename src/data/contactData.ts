import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
}

export interface ContactFormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  required: boolean;
}

export interface ContactData {
  heading: {
    title: string;
    highlightedText: string;
    description: string;
  };
  contactInfo: ContactInfo[];
  formFields: ContactFormField[];
  submitButtonText: string;
}

export const contactData: ContactData = {
  heading: {
    title: "Get in",
    highlightedText: "Touch",
    description: "Have a project in mind or just want to say hello? Feel free to reach out to me using the contact form or through any of the channels listed below."
  },
  contactInfo: [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Cebu, Philippines"
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+63 962 707 2948"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mrbeans.dev@gmail.com"
    },
    {
      icon: FaClock,
      label: "Working Hours",
      value: "Mon - Fri, 9:00 PM - 6:00 AM"
    }
  ],
  formFields: [
    {
      id: "name",
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Your email address",
      required: true
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your message",
      required: true
    }
  ],
  submitButtonText: "Send Message"
}
