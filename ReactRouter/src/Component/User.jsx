import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <h2 className="text-center text-3xl m-5 bg-gray-700 p-10 font-extrabold text-amber-300 ">
      User: {userId}
    </h2>
  );
}
