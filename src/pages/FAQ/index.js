import React from "react";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = { 
    background: "linear-gradient(90deg, #f4bd57 0%, #d08412 100%)", 
    borderBottom: "2px solid #fff"
}

const FAQ = () => {
  return (
    <FAQStyled >
        <div>
        <Accordion style={style}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>How can I pleace  an ordering?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            To place an order, you have many options. 
            Drop by the shop to order in-person, order ahead for pick-up on 
            Ritual or for delivery on Uber Eats and Doordash.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={style}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>I ordered online and need to changemy order. How can I contact?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            No problem. Please text us directly 
            at +38(032)-65-43-210 and one of our team members will try to be in touch as soon as possible.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={style}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Where is your beef from?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Our burgers are made with our signature blend of 100% premium AAA beef cuts, delivered fresh and ground in-house daily. 
            We hand-form each ball then smash every single patty ourselves. Our beef is halal.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={style}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Is your beef halal?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Yes, our beef is locally sourced from a provincially inspected, certified halal farm called Beverly 
            Creek in Burlington, Ont. They ranch, slaughter and process 
            all of their beef in-house. They do not process any other protein other than lamb and beef at this facility
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={style}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography>Do you have seating for dine in</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Currently, we have limited seating available for dine-in guests on a first-come, first-serve basis. 
            Guests are also welcome to enjoy their burgers on our patio weather permitting.
             As always, please be respectful of our restaurant and dispose of garbage accordingly
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </FAQStyled>
  );
};

const FAQStyled = styled.div({
    display: "flex",
    flexBasis: "70%",
    width: "900px",
    marginBottom: "250px",
    marginLeft: "200px",
    marginTop: "50px",
});
       

export default FAQ;