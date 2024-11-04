import React from "react";
import Container from "../../Components/Container";
import NotifictionCard from "../../Components/Notifcition/NotifictionCard";

const Notification = () => {
  return (
    <Container customeStyle={"max-sm:px-2 px-6 max-sm:pb-24 max-sm:pt-12 py-6"}>
      <section className="flex flex-col gap-2">
       <NotifictionCard userImage={"https://picsum.photos/200"} userName={"southern_circle"} message={"liked your post"} time={"1 hour ago"} action={"liked your post"}/>
       <NotifictionCard userImage={"https://picsum.photos/200"} userName={"southern_circle"} message={"liked your post"} time={"1 hour ago"} action={"liked your post"}/>
       <NotifictionCard userImage={"https://picsum.photos/200"} userName={"southern_circle"} message={"liked your post"} time={"1 hour ago"} action={"liked your post"}/>
       <NotifictionCard userImage={"https://picsum.photos/200"} userName={"southern_circle"} message={"liked your post"} time={"1 hour ago"} action={"liked your post"}/>
       <NotifictionCard userImage={"https://picsum.photos/200"} userName={"southern_circle"} message={"liked your post"} time={"1 hour ago"} action={"liked your post"}/>
      </section>
    </Container>
  );
};

export default Notification;
