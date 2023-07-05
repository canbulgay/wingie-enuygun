import client from "@/lib/apollo-client";
import GET_EMPLOYEE from "@/lib/queries/getEmployee.gql";
import GET_EMPLOYEES from "@/lib/queries/getEmployees.gql";

import EmployeeCard from "@/components/contents/EmployeeCard";
import Layout from "@/components/layout";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_EMPLOYEES,
  });

  const paths = data.employees.map((employee) => ({
    params: { id: employee.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_EMPLOYEE,
    variables: { id: params.id },
  });
  return {
    props: {
      employee: data.employee,
    },
  };
}

export default function Employee({ employee }) {
  return (
    <Layout>
      <EmployeeCard employee={employee} />
    </Layout>
  );
}
