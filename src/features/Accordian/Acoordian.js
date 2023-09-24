import React from "react";
import "./Accordian.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
const Accordian = ({ setShow, nav_links }) => {
  return (
    <div className="nav-accordian h-[100vh] overflow-y-scroll mobileview">
      <Accordion allowZeroExpanded>
        {nav_links.map((element, key) => (
          <AccordionItem key={key}>
            <AccordionItemHeading className="mobile_arroww">
              <AccordionItemButton style={{ justifyContent: "start" }}>
                <Link to={element.link}>
                  <h3
                    className="text-heading text-md font-semibold"
                
                  >
                    {element.name}
                  </h3>
                </Link>
              </AccordionItemButton>
            </AccordionItemHeading>
         
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default Accordian;
