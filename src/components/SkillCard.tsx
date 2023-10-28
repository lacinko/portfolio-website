import { Icon } from "./Icons";

type SkillCardProps = {
  figcaption: string;
  icon: string;
  className: string;
  fill: string;
};

function SkillCard({ icon, className, fill, figcaption }: SkillCardProps) {
  return (
    <figure className="flex aspect-video flex-col items-center justify-center rounded-md border border-black bg-slate-800">
      <Icon icon={icon} className={className} fill={fill} />
      <figcaption className="pt-2 text-center font-bold uppercase text-slate-400">
        {figcaption}
      </figcaption>
    </figure>
  );
}

export default SkillCard;
