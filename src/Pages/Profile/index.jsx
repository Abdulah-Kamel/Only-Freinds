import React from 'react'
import Container from '../../Components/Container'
import ProfileHeader from '../../Components/Profile/ProfileHeader'
import About from '../../Components/Profile/About'
import ProfileGallery from '../../Components/Profile/ProfileGallery'

const index = () => {
  return (
    <Container customeStyle={"py-12 px-8 max-sm:px-2"}>
        <ProfileHeader/>
        <About/>
        <ProfileGallery/>
    </Container>
  )
}

export default index
