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
      <img src={userImage} alt="profile image" className="rounded-full" />
      <section className="ms-2">
        <h3 className="font-bold text-2xl">{data?.username}</h3>
        {/* <p className="text-gray-300">{userBio}</p> */}
      </section>
    </section>
  );
};

export default UserInfo;
