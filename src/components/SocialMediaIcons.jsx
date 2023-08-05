const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
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
      <a
        className="hover:opacity-50 transition duration-500"
        href="skype:live:.cid.74c3bfe85cd99c3e?call"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require('../assets/skype3.png')} />
      </a>
    </div>
  )
}

export default SocialMediaIcons
