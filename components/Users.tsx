import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const USERS_QUERY = gql`
  {
    users {
      id
      firstName
      lastName
    }
  }
`;

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export default function Users() {
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;

  return (
    <ul>
      {data.users &&
        data.users.map((u: IUser) => (
          <li key={u.id}>
            {u.firstName} {u.lastName}
          </li>
        ))}
    </ul>
  );
}
