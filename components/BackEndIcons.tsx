import { backEndIcons } from "@/utils/data/icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const icons = backEndIcons;
const sharedStyles = "p-4 mx-10 my-4";

export const BackEndIcons = () => {
  return (
    <div className="3xl:flex h-[600px]">
      {/* Group 1 */}
      <div className="flex items-end">
        <div className="grid grid-cols-3">
          {icons.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedTooltip
                color={item.color}
                key={index}
                name={item.name}
                index={index}
              >
                <motion.div
                  variants={fadeIn(`${item.direction}`, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.9 }}
                  className={sharedStyles}
                >
                  <Icon size={item.size} color={item.color} />
                </motion.div>
              </AnimatedTooltip>
            );
          })}
        </div>
      </div>
      {/* Group 2 */}
      <div className="flex items-center">
        <div className="grid grid-cols-3">
          {icons.slice(3, 6).map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedTooltip
                color={item.color}
                key={index}
                name={item.name}
                index={index}
              >
                <motion.div
                  variants={fadeIn(`${item.direction}`, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.9 }}
                  className={sharedStyles}
                >
                  <Icon size={item.size} color={item.color} />
                </motion.div>
              </AnimatedTooltip>
            );
          })}
        </div>
      </div>
      {/* Group 3 */}
      <div className="flex items-start">
        <div className="grid grid-cols-3">
          {icons.slice(6, 9).map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedTooltip
                color={item.color}
                key={index}
                name={item.name}
                index={index}
              >
                <motion.div
                  variants={fadeIn(`${item.direction}`, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.9 }}
                  className={sharedStyles}
                >
                  <Icon size={item.size} color={item.color} />
                </motion.div>
              </AnimatedTooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};
