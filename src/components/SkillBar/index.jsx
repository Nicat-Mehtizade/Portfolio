import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white text-lg font-medium">{skill}</span>
        <span className="text-[#6839ea] text-lg font-medium">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-[#2a1f45] rounded-full h-2.5">
        <motion.div
          className="bg-[#6839ea] h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
