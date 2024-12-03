import Container from "../../Components/Container";
import PostCard from "../../Features/Post/PostCard";

const Home = () => {
  const posts = [
    {
      id: 1,
      userName: "john_doe",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
      postContent:
        "Loving the sunset today! 🌅 It feels so peaceful and calming.",
      likes: 120,
      comments: 45,
      shares: 15,
      postImage: "https://picsum.photos/600/400?image=1015",
    },
    {
      id: 2,
      userName: "jane_smith",
      profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
      postContent:
        "Just finished a great book on productivity. Highly recommend it!",
      likes: 75,
      comments: 30,
      shares: 12,
      postImage: "https://picsum.photos/600/400?image=1027",
    },
    {
      id: 3,
      userName: "alice_walker",
      profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
      postContent:
        "Had an amazing workout session today. Feeling stronger than ever!",
      likes: 150,
      comments: 60,
      shares: 25,
      postImage: "https://picsum.photos/600/400?image=1059",
    },
    {
      id: 4,
      userName: "mike_jones",
      profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
      postContent:
        "Trying out a new recipe for dinner tonight. It looks delicious! 🍲",
      likes: 95,
      comments: 35,
      shares: 18,
      postImage: "https://picsum.photos/600/400?image=1041",
    },
    {
      id: 5,
      userName: "lucy_brown",
      profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
      postContent:
        "Exploring new hiking trails this weekend. Nature is the best escape!",
      likes: 110,
      comments: 50,
      shares: 20,
      postImage: "https://picsum.photos/600/400?image=1084",
    },
    {
      id: 6,
      userName: "jack_white",
      profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
      postContent:
        "Can’t wait for the weekend! Planning a fun road trip with friends.",
      likes: 80,
      comments: 25,
      shares: 10,
      postImage: "https://picsum.photos/600/400?image=1025",
    },
    {
      id: 7,
      userName: "olivia_stevens",
      profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
      postContent:
        "A picture from my latest vacation. Beach days are the best days! 🌊",
      likes: 200,
      comments: 80,
      shares: 40,
      postImage: "https://picsum.photos/600/400?image=1036",
    },
    {
      id: 8,
      userName: "chris_evans",
      profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
      postContent:
        "Just finished a marathon. My legs are sore, but I feel accomplished!",
      likes: 175,
      comments: 55,
      shares: 28,
      postImage: "https://picsum.photos/600/400?image=1074",
    },
    {
      id: 9,
      userName: "emily_davis",
      profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
      postContent:
        "Spent the day at the art museum. The exhibits were amazing!",
      likes: 140,
      comments: 65,
      shares: 30,
      postImage: "https://picsum.photos/600/400?image=1045",
    },
    {
      id: 10,
      userName: "daniel_martinez",
      profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
      postContent:
        "Had a blast at the concert last night. The energy was off the charts! Had a blast at the concert last night. The energy was off the charts! Had a blast at the concert last night. The energy was off the charts! Had a blast at the concert last night. The energy was off the charts!",
      likes: 190,
      comments: 75,
      shares: 35,
      postImage: "https://picsum.photos/600/400?image=1021",
    },
  ];

  return (
    <Container customeStyle={"max-sm:px-4 max-sm:pb-24 max-sm:pt-12 py-8 "}>
      <section className="flex flex-col justify-center items-center gap-8 md:mb-24 lg:mb-0">
        {posts.map((post, index) => (
          <PostCard key={index} postData={post} />
        ))}
        {/* <PostCard
          postData={{
            id: 1,
            userImage: "https://picsum.photos/200",
            userName: "southern_circle",
            message: "liked your post",
            time: "1 hour ago",
            action: "liked your post",
            bio: " lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
          }}
        />

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </section>
    </Container>
  );
};

export default Home;
