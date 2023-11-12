interface Users {
  id: number;
  name: string;
  email: string;
}

type Props = { users: Users };

const Users: React.FC<Props> = ({ users }) => {
  return (
    <section>
      <h1 className="text-5xl mb-5">Users</h1>

      <ul>
        {users?.map((dato) => (
          <li key={dato?.id}>
            <p>
              {dato?.id} - {dato?.name} - {dato?.email}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
