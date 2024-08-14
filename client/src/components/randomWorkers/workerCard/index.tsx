interface UserCardProps {
    img: string;
    name: string;
    work: string;
  }

export const UserCard: React.FC<UserCardProps> = ({img, name, work}) => {

  return (
    <div className="workers__container__user">
      <img src={img} alt="userImg" className="workers__container__user-img" />
      <p className="workers__container__user-name">{name}</p>
      <p className="workers__container__user-work">{work}</p>
    </div>
  );
};
