import "./Achievements.scss";
import achievements from "../../Achievements";

const Achievements = () => {
  return (
    <div className="achievements">
      <h1 className="font-bold text-2xl">Wall of Achievements !</h1>
      <div className="img">
        {achievements.map((achievement) => (
          <img key={achievement.id} src={achievement.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
