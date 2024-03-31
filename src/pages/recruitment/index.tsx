import React from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import { useRouter } from "next/router";
import Jobs from "../../../views/components/Recruitment/Jobs";
import AllApplicants from "../../../views/components/Recruitment/AllApplicants";

const Recruitment = () => {
  const router = useRouter();
  const { recruitmentQuery } = router.query;

  const handleDetailsRoute = (queryPath: string) => {
    router.push({
      pathname: `recruitment`,
      query: { recruitmentQuery: queryPath },
    });
  };

  const renderBasedOnQuery = () => {
    switch (recruitmentQuery) {
      case "jobs":
        return <Jobs />;
      case "all-applicants":
        return <AllApplicants />;

      default:
        break;
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-5">
        <p className="text-[18px] font-[500] text-bespokeBlack">Recruitment</p>
        <div className="w-full border-[0.2px] border-b-[#B9B9B9] border-x-transparent border-t-transparent flex gap-6 py-1 ">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleDetailsRoute("jobs")}
          >
            <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
              {(!recruitmentQuery || recruitmentQuery === "jobs") && (
                <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
              )}
            </div>
            <p className="text-[#686868] text-[12px] font-[300] ">Jobs</p>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleDetailsRoute("all-applicants")}
          >
            <div className="h-3 w-3 flex justify-center items-center rounded-[50%] bg-[#FDE0BD] ">
              {recruitmentQuery === "all-applicants" && (
                <div className="h-[6px] w-[6px] flex justify-center items-center rounded-[50%] bg-bespokeOrange " />
              )}
            </div>
            <p className="text-[#686868] text-[12px] font-[300] ">
              All applicants
            </p>
          </div>
        </div>
        <div className="py-6">
          {!recruitmentQuery ? <Jobs /> : renderBasedOnQuery()}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Recruitment;
