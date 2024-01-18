import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Project = ({ title, desc, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(' ').join('-').toLowerCase()

  return (
    <motion.div variants={projectVariant} className="relative cursor-pointer">
      <a download="" href={link}>
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{desc}</p>
        </div>
        {/* 
    Note to Future Self:
    To add new assets to the pojrect, the path of assets is the following:
    Example for MacOSX: /Users/macbookair/Desktop/src/personal/react-portfolio/public/assets/{filename}
    */}
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Created an admin dashboard utilizing Material-UI library for intuitive navigation and
          efficient data management, enhancing UX and operational efficiency
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex text-blue justify-center text-center items-center p-10 bg-white
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="SpaceX GQL Challenge"
            desc="Combining GQL with React using Apollo client."
            link="https://sweet-scone-edd3cc.netlify.app/rocket/5e9d0d95eda69973a809d1ec"
          />
          <Project
            title="React Dashboard"
            desc="Stunning color scheme Admin Dashboard."
            link="https://www.google.com/"
          />

          {/* ROW 2 */}
          <Project
            title="ios AI API integration"
            desc="This app is connected to state of the art ChatGPT via API integration."
            link="https://www.google.com/"
          />
          <Project title="e-Commerce" desc="Clean design with Strapi backend headless CMS." />
          <Project
            title="iOS AI Assistant"
            desc="A native app that leverages RN tech for both Android and iOS"
            link="https://main--stellar-licorice-9945f5.netlify.app/"
          />

          {/* ROW 3 */}
          <Project
            title="Stripe Integration"
            desc="Smart and Secure checkout using Stripe with cutting edge payment security"
            link="https://main--stellar-licorice-9945f5.netlify.app/"
          />
          <Project
            title="Dashboard Customization"
            desc="Dark Mode, Notifications, Settings and Download Reports."
            link="https://www.google.com/"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
