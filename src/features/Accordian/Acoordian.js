import React from "react";
import "./Accordian.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
const Accordian = ({ setShow, nav_links }) => {
  console.log("nav_links", nav_links)
  return (
    <div className="nav-accordian h-[100vh] overflow-y-scroll mobileview">
      <Accordion allowZeroExpanded>
        {nav_links.map((element, key) => (
          <AccordionItem key={key}>
            <AccordionItemHeading className="mobile_arroww">
              <AccordionItemButton style={{ justifyContent: "start" }}>
                  <h3
                    className="text-heading text-md font-semibold"
                
                  >
                <Link href={element.link} onClick={()=>setShow(false)}>

                    {element.name}
                </Link>

                  </h3>
              </AccordionItemButton>
            </AccordionItemHeading>
         
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
};

export default Accordian;
