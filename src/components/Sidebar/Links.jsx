import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div className="flex flex-col items-center justify-center h-full gap-5" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item.name}
          className="text-4xl md:text-2xl cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
