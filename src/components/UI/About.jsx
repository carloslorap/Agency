import React from "react";
import "../../style/about.css";
import aboutImg from '../../images/about-us.jpg'

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium delectus similique eius dicta earum natus atque eum.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium delectus similique eius dicta earum natus atque eum.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium delectus similique eius dicta earum natus atque eum.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h3 className="highlight">Financial challenge</h3>
            <p className="description about_content-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium delectus similique eius dicta earum natus atque eum
              doloremque, voluptatem voluptas.atque eum doloremque, voluptatem
              voluptas.
            </p>
            <div className="choose_item-wrapper">
            {chooseData.map((item, index) => (
              <div className="choose_us-item" key={index}>
                <span className="choose_us-icon">
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h4 className="choose_us-title">{item.title}</h4>
                  <p className="description">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="about_img">
            <img src={aboutImg} alt="hola"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
