const UserBar = ({ openMenu, onOpenRegModal }) => {
  return (
    <>
      <div>
        <button onClick={openMenu}>Log In</button>
        <button onClick={onOpenRegModal}>Registration</button>
      </div>
    </>
  );
};

export default UserBar;
