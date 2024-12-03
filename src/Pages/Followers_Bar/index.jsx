import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Store/UserStore";
import { Link, useLocation } from "react-router-dom";
import ProfileCard from "../../Components/ProfileCard";

const index = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState([]);
  const { getUserData, getAllProfile } = useContext(UserContext);
  const avatarPlacholder =
    (data?.first_name?.slice(0, 1) || "") +
    (data?.last_name?.slice(0, 1) || "");
  const handleUserData = async () => {
    const data = await getUserData().then(function (res) {
      setData(res?.data);
      setLoading(false);
    });
  };
  const handleProfilesData = async (page, page_size) => {
    const data = await getAllProfile(page, page_size).then(function (res) {
      setProfileData(res?.data?.results);
      setLoading(false);
    });
  };
  useEffect(() => {
    handleUserData();
    handleProfilesData(1, 5);
  }, [data, profileData]);
  return (
    <section
      className={`col-start-10 col-span-3 shadow-xl py-6 px-4 h-fit ${
        pathname !== "/" && "hidden"
      } max-lg:hidden`}
    >
      <section>
        <ProfileCard data={data} me={true} loading={loading} />
      </section>
      <section className="mt-2">
        <section className="flex justify-between">
          <h3 className="font-bold ">Suggested for you</h3>
          <Link
            to="/explore"
            className="link link-hover text-black dark:text-white/90"
          >
            See all
          </Link>
        </section>
        <section>
          {profileData
            ?.filter((item) => item?.id !== data?.id)
            .map((item) => (
              <ProfileCard key={item.id} data={item} loading={loading} />
            ))}
        </section>
      </section>
    </section>
  );
};

export default index;
