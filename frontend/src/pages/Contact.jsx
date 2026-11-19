import React from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import SocialLinks from "../components/contact/SocialLinks";
import Spotlight from "../components/ui/Spotlight";
import BlurBlob from "../components/ui/BlurBlob";
import useLenis from "../hooks/useLenis";

function Contact() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#070708] pt-32 pb-20 overflow-hidden">
      
      <Spotlight />
      <BlurBlob color="gold" size="w-[500px] h-[500px]" position="top-[-10%] left-[-15%]" opacity="opacity-15" />
      <BlurBlob color="red" size="w-[450px] h-[450px]" position="bottom-[-10%] right-[-10%]" opacity="opacity-10" />

      <Container>
        
        <SectionHeading
          title="Establish Communications Link"
          subtitle="Activate repulsor transceivers to transmit encrypted queries or log collaborative project directives."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <ContactInfo />
            
            <div className="space-y-3">
              <span className="block text-[8px] font-mono text-gray-500 tracking-wider uppercase">// SOCIAL BLUEPRINT LINKS</span>
              <SocialLinks />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </Container>
    </div>
  );
}

export default Contact;