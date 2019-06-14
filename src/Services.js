import React, { Component } from "react";
import "./Services.css";

const iconObj = [
  {
    icon: <i class="fas fa-mobile" />,
    title: "Responsive",
    description: "Looks great on any screen size!"
  },
  {
    icon: <i class="fas fa-pencil-alt" />,
    title: "Redesigned",
    description: "Freshly redesigned using React"
  },
  {
    icon: <i class="fas fa-thumbs-up" />,
    title: "Favorite",
    description: "Millions of users now use React"
  },
  {
    icon: <i class="fas fa-question" />,
    title: "Question",
    description: "Got a query? Let's catch up over a coffee!!"
  }
];
class Icons extends Component {
  render() {
    return (
      <div>
        <span>{this.props.icon}</span>
        <h4>{this.props.title}</h4>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>services</h3>
        <h2>What we offer</h2>
        <div className="row">
          <Icons
            icon={iconObj[0].icon}
            title={iconObj[0].title}
            desc={iconObj[0].description}
          />
          <Icons
            icon={iconObj[1].icon}
            title={iconObj[1].title}
            desc={iconObj[1].description}
          />
          <Icons
            icon={iconObj[2].icon}
            title={iconObj[2].title}
            desc={iconObj[2].description}
          />
          <Icons
            icon={iconObj[3].icon}
            title={iconObj[3].title}
            desc={iconObj[3].description}
          />
        </div>
      </div>
    );
  }
}

export default Services;
