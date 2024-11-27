import { Progress as ProgressFlow } from "flowbite-react";

function Progress() {
  return (
    <div className=" mt-10 flex items-center justify-center">
      <div className="w-6/12">
        <ProgressFlow progress={50} />
      </div>
    </div>
  );
}

export default Progress;
