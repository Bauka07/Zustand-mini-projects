import Qustion from "./Qustion";
import Sidebar from "./Sidebar";

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Qustion />
      </div>
    </div>
  );
};

export default QuizLayout;
