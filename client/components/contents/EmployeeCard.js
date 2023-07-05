import { useAmp } from "next/amp";
import Head from "next/head";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Stack,
  Container,
  Avatar,
} from "@chakra-ui/react";

export const config = { amp: "hybrid" };

export default function EmployeeCard({ employee }) {
  const isAmp = useAmp();
  const addEmployeeJsonLd = () => {
    return {
      __html: `
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "${employee.firstName} ${employee.lastName}",
                "jobTitle": "${employee.jobTitle}",
                "image": "${employee.image}",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "${employee.address.street} ${employee.address.number}",
                    "addressLocality": "${employee.address.city}",
                    "addressRegion": "${employee.address.state}",
                    "postalCode": "${employee.address.zipCode}",
                    "addressCountry": "${employee.address.country}"
                },
                "email": "${employee.email}",
                "telephone": "${employee.phone}",
                
                "url": "https://wingie-enuygun.vercel.app/employees/${employee.id}"
            }           `,
    };
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addEmployeeJsonLd()}
        />
      </Head>
      <Container maxW="container.lg" centerContent>
        <Card maxW="sm" borderWidth="1px" overflow="hidden" margin="2rem">
          <CardHeader
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5"}
          >
            <div>
              {isAmp ? (
              <amp-img
                src={employee.image}
                alt={employee.firstName}
                width={50}
                height={50}
                layout="responsive"
              />
              ) : (
              <Avatar
                src={employee.image}
                alt={employee.firstName}
                size="2xl"
                rounded={"full"}
              />
              ) }
            </div>
            <Heading as="h2" size="lg">
              {employee.firstName} {employee.lastName}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing="4">
              <Text>
                <b>Age:</b> {employee.age}
              </Text>
              <Text>
                <b>Phone: </b>
                {employee.phone}
              </Text>
              <Text>
                <b>Email:</b> {employee.email}
              </Text>
              <Text>
                <b>Job Title:</b> {employee.jobTitle}
              </Text>
              <Text>
                <b>Address:</b> {employee.address.street}{" "}
                {employee.address.number} {employee.address.city}{" "}
                {employee.address.state} {employee.address.zipCode}{" "}
                {employee.address.country}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter justify={"center"}>
            <Link href="/">
              <Button colorScheme="blue" variant="outline">
                Go Back
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

