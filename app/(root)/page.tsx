import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="">
            Get Interview-Ready with AI-Powered Practice and Feedback
          </h2>

          <p className="text-lg">
            Practice on real interview questions and get instant feedback
          </p>

          <Button className="btn-primary max-sm:w-full" asChild>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          height={400}
          width={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="capitalize">your interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map(interview => (
            <InterviewCard {...interview} key={interview.id} />
          )) }
          {/* : <p className="">You haven&apos;t taken any interviews yet.</p> } */}
  
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="capitalize">take an interview</h2>

        <div className="interviews-section">
        {dummyInterviews.map(interview => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          
          {/*  : <p className="">There are no interviews available.</p>} */}
        </div>
      </section>
    </>
  );
};

export default Page;
