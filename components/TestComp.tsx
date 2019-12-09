import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";

export const SAY_HELLO_QUERY = gql`
  {
    sayHello
  }
`;

export default function SayHello() {
  const { data } = useQuery(SAY_HELLO_QUERY);

  return (
    <>
      <div>test... {data.sayHello}</div>
    </>
  );
}
