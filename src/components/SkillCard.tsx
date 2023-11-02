import { Skill } from "../types/types";
import { Icon } from "./Icons";

type SkillCardProps = Omit<Skill, "id" | "createdAt" | "updatedAt" | "type"> & {
  className: string;
  fill: string;
};

function SkillCard({ icon, className, fill, name }: SkillCardProps) {
  return (
    <figure className="flex aspect-video flex-col items-center justify-center rounded-md border border-black bg-slate-800">
      <Icon icon={icon} className={className} fill={fill} />
      <figcaption className="pt-2 text-center font-bold uppercase text-slate-400">
        {name}
      </figcaption>
    </figure>
  );
}

export default SkillCard;
