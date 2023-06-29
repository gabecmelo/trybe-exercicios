const user = {
  firstName: 'Miguel',
  lastName: 'Silva'
};

function User() {
  return (
    <span>{`${user.firstName} ${user.lastName}`}</span>
  );
};

export default User;