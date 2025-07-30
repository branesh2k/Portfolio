import project1_img from "./project_1.svg";
import project2_img from "./project_2.svg";
import project3_img from "./project_3.svg";
import project4_img from "./project_4.svg";
import project5_img from "./project_5.svg";
import project6_img from "./project_6.svg";

interface MyworkData {
  w_no: number;
  w_name: string;
  w_img: string;
}
const mywork_data: MyworkData[] = [
  {
    w_no: 1,
    w_name: "Web design",
    w_img: project1_img,
  },
  {
    w_no: 2,
    w_name: "Web design",
    w_img: project2_img,
  },
  {
    w_no: 3,
    w_name: "Web design",
    w_img: project3_img,
  },
  {
    w_no: 4,
    w_name: "Web design",
    w_img: project4_img,
  },
  {
    w_no: 5,
    w_name: "Web design",
    w_img: project5_img,
  },
  {
    w_no: 6,
    w_name: "Web design",
    w_img: project6_img,
  },
];

export default mywork_data;
