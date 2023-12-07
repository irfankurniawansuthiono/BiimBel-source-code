import CoursePrice from "./CoursePrice";
import Review from "./Review";
export default function Pricing({ loginWithGoogle }) {
  return (
    <>
      <CoursePrice loginWithGoogle={loginWithGoogle} />
      <Review />
    </>
  );
}
