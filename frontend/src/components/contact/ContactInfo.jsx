import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { PERSONAL_INFO } from "../../utils/constants";

function ContactInfo() {
  const details = [
    { Icon: FaEnvelope, text: PERSONAL_INFO.email, title: "Email" },
    { Icon: FaPhoneAlt, text: PERSONAL_INFO.phone, title: "Phone" },
    { Icon: FaMapMarkerAlt, text: PERSONAL_INFO.location, title: "Location" },
  ];

  return (
    <div className="space-y-4">
      {details.map((detail, idx) => {
        const { Icon, text, title } = detail;
        return (
          <div
            key={idx}
            className="flex gap-4 p-4 rounded bg-[#121212]/50 border border-white/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-950/10 text-red-500">
              <Icon size={14} />
            </div>

            <div>
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-0.5">
                // {title}
              </span>
              <span className="text-sm font-semibold text-white">
                {text}
              </span>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
