import { useEffect, useState } from "react";

import client from "@/lib/apollo-client";
import GET_EMPLOYEES from "@/lib/queries/getEmployees.gql";

import EmployeeList from "@/components/contents/EmployeeList";
import Layout from "@/components/layout";

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: GET_EMPLOYEES,
  });
  return {
    props: {
      employeesData: error ? [] : data.employees,
    },
  };
}

export default function Home({ employeesData }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const temp = [...employeesData];
    temp.sort((a, b) => b.voteCount - a.voteCount);
    setEmployees(temp);
  }, [employeesData]);

  const handleVote = (index) => {
    const temp = [...employees];
    temp[index].voteCount += 1;
    temp.sort((a, b) => b.voteCount - a.voteCount);
    setEmployees(temp);
  };
  return (
    <Layout>
      <EmployeeList employees={employees} handleVote={handleVote} />
    </Layout>
  );
}
