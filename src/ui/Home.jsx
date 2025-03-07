import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
function Home() {
  const username = useSelector((state) => state.user.userName);

  return (
    <div className="mb-10 mt-10 text-center">
      <h1 className="mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to={'/menu'} type={'primary'}>
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
