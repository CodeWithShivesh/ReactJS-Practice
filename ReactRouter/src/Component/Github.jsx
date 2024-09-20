import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github() {
  const { userName } = useParams();
  // const data = useLoaderData();

  //instead of this we are using loader in routes

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }, []);

  return (
    <div className="m-10 p-5 bg-sky-200 flex flex-col">
      <h1 className="text-center text-3xl p-8 mb-5 bg-gray-700 font-extrabold text-amber-300 ">
        User: Mr. {data.name}
      </h1>
      <div className="mt-2 flex">
        <img
          className="mx-20 flex items-center"
          src={data.avatar_url}
          alt="Github Profile"
          width={300}
        />
        <div
          className="mx-10 px-10 pt-7 bg-slate-800 text-yellow-300 font-semibold"
          style={{ width: "700px" }}
        >
          <ul className="list-disc">
            <li>UserId: {data.login}</li>
            <li>Id: {data.id}</li>
            <li>Company: {data.company}</li>
            <li>Email: {data.email}</li>
            <li>Bio: {data.bio}</li>
            <li>Twitter: {data.twitter_username}</li>
            <li>Followers: {data.followers}</li>
            <li>Repos: {data.public_repos}</li>
            <li>Following: {data.following}</li>
            <li>Github Url: {data.url}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//use this three line codes or above commented code
// export const GithubDataInfo = async () => {
//   const Response = await fetch(`https://api.github.com/users/CodeWithShivesh`);
//   return Response.json();
// };
