import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Store/UserStore";
const UserInfo = ({ userImage, userName, userBio }) => {
  const { getUserData } = useContext(UserContext);
  const [data,setData] = useState()
  const handleUserData = async () => {
    const data = await getUserData().then((res) => setData(res.data));
  };
  useEffect(() => {
    handleUserData();
  }, []);
  return (
    <section className="flex items-center max-lg:flex-col max-lg:text-center">
      <div className="avatar">
        <div className="w-32 md:w-48 rounded-full">
          <img src={userImage} />
        </div>
      </div>
      {/* <section className="ms-2">
        <h3 className="font-bold text-2xl">{data?.username} Test</h3>
        <p className="">{userBio} Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, labore!</p>
      </section> */}
    </section>
  );
};

export default UserInfo;
