import  { useContext, useEffect, useState } from "react";
import Container from "../../Components/Container";
import ProfileGallery from "../../Components/Old_Profile/ProfileGallery";
import Avatar from "../../Components/Profile/Avatar";
import UserAbout from "../../Components/Profile/UserAbout";
import UserActions from "../../Components/Profile/UserActions";
import { UserContext } from "../../Store/UserStore";
const index = () => {
  const [loading, setLoading] = useState(true);
  const { getUserProfile, baseUrl } = useContext(UserContext);
  const [userData, setUserData] = useState(false);

  const handleUserData = async () => {
    const data = await getUserProfile().then(function (res) {
      setLoading(false);
      setUserData(res.data);
    });
  };

  useEffect(() => {
    handleUserData();
  }, []);
  return (
    <Container customeStyle={"py-12 px-8 max-sm:px-2"}>
      {loading ? (
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4">
            <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-64"></div>
              <div className="skeleton h-3 w-64"></div>
            </div>
          </div>
        </div>
      ) : (
        <section className="flex gap-12 max-md:flex-col max-md:gap-4 max-sm:items-center">
          <Avatar userData={userData} baseUrl={baseUrl} />
          <section className="max-sm:w-full">
            <section className="flex items-start gap-8 max-sm:flex-col max-sm:items-center">
              <UserAbout userName={userData.username} userBio={userData?.bio} />
              <UserActions />
            </section>
            <section className="mt-10 md:mt-4 w-full">
              <ul className="flex gap-4 max-sm:flex-col max-sm:items-center">
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">10</span>posts
                </li>
                <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">
                    {userData?.followers_count}
                  </span>
                  followers
                </li>
                <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
                <li className="text-xl dark:text-white/90">
                  <span className="font-bold me-2">{userData?.following_count}</span>following
                </li>
              </ul>
            </section>
          </section>
        </section>
      )}

      <ProfileGallery />
    </Container>
  );
};

export default index;
