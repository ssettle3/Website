import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Link = styled.a`
  font-size: 15px;
  padding: 5px 0px;
  color: #197bdc;
  cursor: pointer;
  text-decoration: none;
`;

const items = [
  {
    title: "Senior Software Engineer & Tech Lead",
    company: "SalesLoft",
    location: "Atlanta, GA",
    date: "Aug 2019 - Present",
    subheading:
      "React, Elixir, Angular, RoR, CI/CD, Microservice Architecture, TDD",
    icon: null,
    website: "https://www.salesloft.com"
  },
  {
    title: "Software Engineer & Tech Lead",
    company: "SalesLoft",
    location: "Atlanta, GA",
    date: "Jun 2016 - Aug 2019",
    subheading:
      "React, Elixir, Angular, RoR, CI/CD, Microservice Architecture, TDD",
    icon: null,
    website: "https://www.salesloft.com"
  },
  {
    title: "Software Engineering Mentor",
    company: "Thinkful",
    location: "Atlanta, GA",
    date: "Dec 2016 - Dec 2017",
    subheading: "Mentorship/Leadership, Node, React/Redux, jQuery",
    icon: null,
    website: "https://www.thinkful.com"
  },
  {
    title: "Software Support Engineer",
    company: "SalesLoft",
    location: "Atlanta, GA",
    date: "Aug 2015 - June 2016",
    subheading: "SQL, Amazon Web Services, React, RoR, Angular",
    icon: null,
    website: "https://www.salesloft.com"
  },
  {
    title: "Software Engineering Intern",
    company: "SalesLoft",
    location: "Atlanta, GA",
    date: "May 2015 - July 2015",
    subheading: "RoR, Angular, React, Agile/Scrum, Sidekiq",
    icon: null,
    website: "https://www.salesloft.com"
  },
  {
    title: "The Yard Yard",
    location: "Atlanta, GA",
    date: "Jan 2015 - Apr 2015",
    subheading: "Angular, Backbone, SCSS, React, Git, CI/CD, SCSS",
    icon: null
  },
  {
    title: "Project Manager",
    company: "Pierre Construction Group",
    location: "Atlanta, GA",
    date: "Jun 2012 - Dec 2014",
    subheading: "Project Estimation, Management, Coordination, and Oversight",
    icon: null,
    website: "https://www.pierreconstruction.com"
  },
  {
    title: "BoS in Construction Managament",
    company: "Georgia Tech",
    location: "Atlanta, GA",
    date: "Aug 2008 - May 2012",
    subheading: "Estimation, Planning, and Management",
    icon: null,
    website: "https://gatech.edu"
  }
];

export function AboutMe() {
  return (
    <VerticalTimeline>
      {items.map(item => (
        <VerticalTimelineElement
          key={item.date}
          className="vertical-timeline-element--work"
          date={item.date}
          iconStyle={{ background: "#197bdc", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {item.company && (
              <Link href={item.website} target="_blank">
                {item.company}
              </Link>
            )}{" "}
            {item.location}
          </h4>
          <p>{item.subheading}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
