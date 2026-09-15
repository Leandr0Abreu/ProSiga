import type { FC, SVGProps } from 'react';
import TeacherSvg from '../assets/MascotTeacher.svg?react';
import AngrySvg from '../assets/MascotAngry.svg?react';
import HappySvg from '../assets/MascotHappy.svg?react';
import ConfusedSvg from '../assets/MascotConfused.svg?react';

type MascotVariant = 'teacher' | 'angry' | 'happy' | 'confused';

interface MascotProps {
  variant: MascotVariant;
  className?: string;
  title: string;
}

const variantMap: Record<MascotVariant, FC<SVGProps<SVGSVGElement>>> = {
  teacher: TeacherSvg,
  angry: AngrySvg,
  happy: HappySvg,
  confused: ConfusedSvg,
};

const Mascot: FC<MascotProps> = ({ variant, className, title }) => {
  const SvgComponent = variantMap[variant];
  return <SvgComponent className={className} role="img" aria-label={title} />;
};

export default Mascot;