import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Accordian = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About Institute</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className=" text-justify">
            J.C Bose Senior Secondary School, situated at Chowrangee, Katigorah-
            788804 is one of the most promising institution of the Katigorah and
            also the entire Barak Valley imparting quality education at High
            School and Higher Secondary levels. The Senior Secondary School
            erstwhile junior college was found on 10th November in the year
            2015. It is a non-government institution started with an enrollment
            of 150 students. This college was established in the name of Acharya
            Jagadish Chandra Bose, who is known as the father of Bengali science
            fiction. <Link to="/about"><button className="bg-gray-200 p-2 rounded-lg">Continue...</button></Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
