import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
function FriendList({ friends }) {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          ))}
        </li>
      </ul>
    </>
  );
}

export default FriendList;
