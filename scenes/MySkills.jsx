import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-5 pb-20 px-5 py-20 xs:py-10 xs:px-10, mb-0, p-2 ">
      {/* HEADER AND IMAGE SECTION */}
      
      <div className="md:flex md:justify-between md:gap-16 mt-32 xs:mt-0">
        
        <motion.div
          className="md:w-1/3 flex justify-start text-center px-5 py-20 xs:py-10 xs:px-10, mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-6xl mb-2 w-1 text-center ">
            My<span className="text-blue">Skills</span>
          </p>
          
          {/* <p className="mt-10 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            natus quidem sit similique voluptatem dolorum, modi sunt, quibusdam
            maxime, necessitatibus iste labore deleniti minus eveniet
            reprehenderit molestiae voluptatibus explicabo. Odio!
          </p> */}
      
        </motion.div>

       
        <div className="mt-16 md:mt-2">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between md-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10 background:red"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">FrontEnd</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              front end
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
          Developed and maintained code using HTML, CSS, Sass, JavaScript, and jQuery, Git, Bootstrap, Vercel
          </p>
        </motion.div>
        
           {/* Inovative */}
           <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Designer</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Designer 
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
Clean design & patterns using design tools: Figma, Font Awesome, Sketch
          </p>
        </motion.div>

                
           {/* Imaginative */}
           <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5">
   Exercitationem distinctio sed maiores non consectetur, dolorum earum dolores commodi magnam nisi nobis beatae laborum ullam.
          </p>
        </motion.div>

        
      </div>
    </section>
  );
};
export default MySkills;
