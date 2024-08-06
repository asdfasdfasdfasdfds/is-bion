import React from "react";
import "../assets/styles/components/Select.css"

function Select({ services, ...props }) {
  return (
    <>
      <select id="subject" {...props}>
          <option value='service'>
            Konu Seçiniz
          </option>
        {services.map((service) => (
          <option key={service.node.slug} value={service.node.title}>
            {service.node.title}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
