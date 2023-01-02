import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-8 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pt-28  flex justify-center xs:py-10 xs:px-10, p-2" >
      {/* HEADING */}
      <div>
      <motion.div
        className="md:w-1/3 text-center md:text-left "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >

        <p className=" font-playfair font-semibold text-4xl mb-3 text-blue flex justify-center text-center">
          TESTIMONIALS
        </p>
        {/* <LineGradient width="mx-auto w-1/4"/> */}
        <p className="mt-5 text-center text-xl justify-center">
          Just a random text to complete the page. Consectetur natus quidem sit
          similique voluptatem dolorum, modi sunt, quibusdam maxime,
          necessitatibus iste labore deleniti minus eveniet reprehenderit
          molestiae voluptatibus explicabo. Odio!
        </p>
     
      </motion.div>
      {/* TESTIMONIAL SECTION */}
      <div className="md:flex md:justify-between gap-8 mb-[-25px]">
        {/* FIRST PERSON */}
        <motion.div
          className={`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl">""</p>
          <p className="text-center text-md"> FIRST TEXT. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium adipisci vero ut fugit soluta illo error quas rem velit accusamus dolore distinctio earum officia molestiae quis veritatis, a repellendus obcaecati.</p>
        </motion.div>
{/* SECOND PERSON  */}
        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl"> ""</p>
          <p className="text-center text-md"> SECOND TEXT .Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium adipisci vero ut fugit soluta illo error quas rem velit accusamus dolore distinctio earum officia molestiae quis veritatis, a repellendus obcaecati.</p>
        </motion.div>
        {/* THIRD PERSON */}
        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl"> ""</p>
          <p className="text-center text-md"> SECOND TEXT .Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium adipisci vero ut fugit soluta illo error quas rem velit accusamus dolore distinctio earum officia molestiae quis veritatis, a repellendus obcaecati.</p>
        </motion.div>
      </div>
      </div>
    </section>
    
   
  );
};

export default Testimonials;
