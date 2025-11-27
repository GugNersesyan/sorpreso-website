import { memo } from "react";
import "./Contacts.css";

interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    href?: string;
}

const contactData: readonly ContactInfo[] = [
    {
        icon: "📞",
        label: "Phone",
        value: "+374 96915615",
    },
    {
        icon: "✉️",
        label: "Email",
        value: "hgagik206@gmail.com",
        href: "mailto:hgagik206@gmail.com",
    },
    {
        icon: "📍",
        label: "Address",
        value: "Mashtoc 46/1, Nalbandyan 46/1, Charenc 16/47",
    },
    {
        icon: "🕐",
        label: "Hours",
        value: "Mon-Fri: 9:00 AM - 9:00 PM",
    },
] as const;

const socialLinks = [
    { name: 'Facebook', url: "#", icon: "🅕" },
    { name: "Instagram", url: "#", icon: "📷" },
] as const;

export const Contacts = memo(() => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="contacts" role="contentinfo">
            <div className="contacts_container">
                {/* Contact Information Section */}
                <div className="contacts_info">
                    <h2 className="contacts_title">Get in Touch</h2>
                    <div className="contacts_grid">
                        {contactData.map((contact, index) => (
                            <div key={index} className="contacts_item">
                                <span className="contacts_icon" aria-hidden='true'>
                                    {contact.icon}
                                </span>
                                <div className="contacts_details">
                                    <span className="contacts_label">{contact.label}</span>
                                    {contact.href ? (
                                        <a
                                            href={contact.href}
                                            className="contacts_link"
                                            aria-label={`${contact.label}: ${contact.value}`}
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="contacts_value">{contact.value}</span>

                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="contacts_social">
                    <h3 className="contacts_social_title">Follow Us</h3>
                    <div className="contacts_social_links">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="contacts_social_link"
                                aria-label={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span aria-hidden='true'>{social.icon}</span>
                                <span className="contacts_social_name">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="contacts_footer">
                    <p className="contacts_copyright">
                        $copy: {currentYear} Sorpreso. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
});

Contacts.displayName = "Contacts";