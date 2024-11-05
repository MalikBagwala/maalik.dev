import { motion } from "framer-motion";
export default function Test() {
  return (
    <div className="content container">
      <div className="h-[100vh]" />
      <motion.div
        className="w-40 h-40 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
