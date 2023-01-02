import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// Transition for each Project Item
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({title}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          First of the projects, more to come
           </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
}
const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-20 px-5 py-20 xs:py-10 xs:px-10, mb-0, p-2">
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          {/* <p className="font-playfair font-semibold text-4xl">
          Some Things I’ve <span className="text-blue"> Built</span> 
          </p>  */}
          <p className="font-playfair font-semibold text-4xl">
          Here are a few past design <span className="text-blue"> projects I've worked on</span> 
          </p>
          {/* <LineGradient width="w-5/6"/> */}
          <div className="flex justify-center mt-10">
          {/* <p className="mt-8 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          natus quidem sit similique voluptatem dolorum, modi sunt, quibusdam
          maxime, necessitatibus iste labore deleniti minus eveniet
          reprehenderit molestiae voluptatibus explicabo. Odio!
        </p> */}
          </div>
        </div>
   
      </motion.div>

      {/* PROJECT LIST*/}
      <div className="flex justify-center ">
        <motion.div
          className="grid grid-cols-3 gap-place-items-stretch xs:last:text-sm-2sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div className="first:bg-yellow flex justify-center text-center items-center p-10  max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          > USER INTERFACE
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />
          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div className="sm-text-2sm flex justify-center text-center items-center p-10 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold ">
            Smooth User Experience
          </div>
          </motion.div>
      </div>
    </section>
  );
};
export default Projects;
