import Agent from "@/components/Agent";

const Page = () => {
  return (
    <>
      <h3 className="capitalize">interview generation</h3>

      <Agent userName="You" userId="user1" type="generate" />
    </>
  );
};

export default Page;
