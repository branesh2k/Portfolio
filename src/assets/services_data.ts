export interface Project {
  s_no: string;
  s_name: string;
  s_desc: string;
  s_link: string;
}

export const projects_data: Project[] = [
  {
    s_no: "01",
    s_name: "Redshift DataWarehouse",
    s_desc:
      "A data warehouse project built on Amazon Redshift, integrating CRM and ERP data with optimized schema design.",
    s_link: "https://github.com/branesh2k/AWS-Redshift-DataWarehouse",
  },
  {
    s_no: "02",
    s_name: "AWS EMR with Airflow",
    s_desc:
      "Scalable ETL pipeline using Airflow to orchestrate Spark jobs on AWS EMR. Focused on production-grade workflow scheduling.",
    s_link: "https://github.com/branesh2k/AWS-EMR_with_Airflow",
  },
  {
    s_no: "03",
    s_name: "Social Media API (FastAPI)",
    s_desc:
      "RESTful backend with JWT auth, user posts, and followers. Built using FastAPI and PostgreSQL with relational modeling.",
    s_link: "https://github.com/branesh2k/Social_Media_API",
  },
  {
    s_no: "04",
    s_name: "Chef Mistral Webapp",
    s_desc:
      "Webapp where users input ingredients and get recipe suggestions using Mistral LLM. Built using ReactJS, no backend.",
    s_link: "https://github.com/branesh2k/Chef-Mistral-webapp",
  },
  {
    s_no: "05",
    s_name: "TARA API",
    s_desc:
      "FastAPI-based backend for a personal productivity tool. RESTful API design, PostgreSQL DB, and Docker containerization.",
    s_link: "https://github.com/branesh2k/tara-api",
  },
  {
    s_no: "06",
    s_name: "Art SQL Museum Analysis",
    s_desc:
      "Exploratory data analysis on museum art collections using SQL queries. Focused on extracting insights from categorical and temporal data.",
    s_link: "https://github.com/branesh2k/art-museum-sql-analysis",
  },
];

export default projects_data;
