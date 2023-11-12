import Users from "@/components/Users";

const API = `https://jsonplaceholder.typicode.com/users`;

const getUsers = async () => {
  const res = await fetch(API);

  return res.json();
};

const App: React.FC = async () => {
  const users = await getUsers();

  return <Users users={users} />;
};

export default App;
