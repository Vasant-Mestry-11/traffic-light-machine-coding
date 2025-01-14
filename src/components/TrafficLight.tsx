const TrafficLight = ({
  isActive,
  bgClass,
}: {
  isActive: boolean;
  bgClass?: string;
}) => {
  return (
    <div
      className={`trafficLight ${isActive ? bgClass : "background-gray"}`}
    ></div>
  );
};

export default TrafficLight;
