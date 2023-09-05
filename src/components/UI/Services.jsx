import React from "react";
import "../../style/service.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium delectus similique eius dicta earum natus atque eum doloremque, voluptatem voluptas.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium delectus similique eius dicta earum natus atque eum doloremque, voluptatem voluptas.",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium delectus similique eius dicta earum natus atque eum doloremque, voluptatem voluptas.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium delectus similique eius dicta earum natus atque eum doloremque, voluptatem voluptas.",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h3 className="highlight">our best services</h3>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services_item" key={index}>
              <span className="services_icon">
                <i className={item.icon} ></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
