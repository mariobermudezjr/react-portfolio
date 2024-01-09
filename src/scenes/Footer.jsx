import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className="h-32 bg-blue pt-3">
      <div className="w-11/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">Mario Bermudez Jr</p>
          <p className="font-playfair text-md text-white">
            ©2023 Curious Loop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
