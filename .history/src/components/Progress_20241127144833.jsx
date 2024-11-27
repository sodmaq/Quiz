import { Progress as ProgressFlow } from "flowbite-react";
function Progress() {
  return (
    <div className="w-6/12 mt-10 text-center ">
      {" "}
      <ProgressFlow progress={50} />
    </div>
  );
}

export default Progress;
