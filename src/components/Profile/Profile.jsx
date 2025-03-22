import css from "./Profile.module.css";
function Profile(props) {
  return (
    <>
      <div className={css.frapper}>
        <div>
          <img className={css.avatar} src={props.avatar} alt="User avatar" />
          <p className={css.name}>{props.name}</p>
          <p className={css.tagandlocation}>@{props.tag}</p>
          <p className={css.tagandlocation}>{props.location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span>{props.stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span>{props.stats.views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Profile;
