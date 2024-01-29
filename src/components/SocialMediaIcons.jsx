const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-3 gap-4">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mario-bermudez/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/mariobermudezjr"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require('../assets/github.png')} />
      </a>
    </div>
  )
}

export default SocialMediaIcons
