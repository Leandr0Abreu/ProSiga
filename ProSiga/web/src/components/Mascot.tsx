import type { FC } from 'react';

type MascotVariant = 'hero' | 'professor' | 'aluno';

interface MascotProps {
  variant: MascotVariant;
  className?: string;
  title: string;
}

const INK = '#1f2d52';
const HEAD = '#5f8fd1';
const BODY = '#8fb6e8';
const BODY_MID = '#6f9bd6';
const SPIKE = '#a9c8ef';
const ACCENT = '#4a7ec2';
const PAPER_LINE = '#c7d3e6';

const BaseCreature: FC = () => (
  <>
    <path
      d="M60 145 C28 148 14 178 32 200 C46 217 74 212 76 190"
      fill="none"
      stroke={INK}
      strokeWidth={19}
      strokeLinecap="round"
    />
    <path
      d="M60 145 C28 148 14 178 32 200 C46 217 74 212 76 190"
      fill="none"
      stroke={BODY_MID}
      strokeWidth={14}
      strokeLinecap="round"
    />
    <path d="M150 132 L163 111 L169 134 Z" fill={SPIKE} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
    <path d="M163 147 L177 130 L181 152 Z" fill={SPIKE} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
    <path d="M172 164 L187 149 L189 170 Z" fill={SPIKE} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
    <rect x={80} y={176} width={26} height={38} rx={10} fill={BODY_MID} stroke={INK} strokeWidth={2.5} />
    <rect x={120} y={176} width={26} height={38} rx={10} fill={BODY_MID} stroke={INK} strokeWidth={2.5} />
    <ellipse cx={114} cy={150} rx={58} ry={48} fill={BODY} stroke={INK} strokeWidth={3} />
    <rect x={92} y={88} width={44} height={20} fill={BODY_MID} stroke={INK} strokeWidth={3} />
  </>
);

const Head: FC = () => (
  <>
    <rect x={54} y={8} width={112} height={90} rx={18} fill={HEAD} stroke={INK} strokeWidth={3.5} />
    <circle cx={62} cy={25} r={2.4} fill={INK} opacity={0.55} />
    <circle cx={62} cy={40} r={2.4} fill={INK} opacity={0.55} />
    <circle cx={62} cy={55} r={2.4} fill={INK} opacity={0.55} />
    <circle cx={62} cy={70} r={2.4} fill={INK} opacity={0.55} />
    <circle cx={62} cy={85} r={2.4} fill={INK} opacity={0.55} />
    <line x1={80} y1={42} x2={94} y2={38} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
    <line x1={136} y1={38} x2={122} y2={42} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
    <rect x={82} y={47} width={16} height={24} rx={5} fill={INK} />
    <rect x={118} y={47} width={16} height={24} rx={5} fill={INK} />
  </>
);

const HeroExtras: FC = () => (
  <>
    <g transform="rotate(-18 34 18)">
      <rect x={20} y={9} width={28} height={18} rx={3} fill={INK} />
      <rect x={24} y={13} width={20} height={10} rx={1.5} fill={SPIKE} />
    </g>
    <text x={146} y={30} fontFamily="Sora, sans-serif" fontWeight={700} fontSize={24} fill={ACCENT} transform="rotate(10 146 30)">
      ?
    </text>
    <text x={18} y={60} fontFamily="Sora, sans-serif" fontWeight={700} fontSize={18} fill={ACCENT} transform="rotate(-12 18 60)">
      ?
    </text>
    <text x={158} y={82} fontFamily="Sora, sans-serif" fontWeight={700} fontSize={20} fill={ACCENT} transform="rotate(14 158 82)">
      ?
    </text>
  </>
);

const ProfessorExtras: FC = () => (
  <g transform="rotate(-8 42 190)">
    <rect x={14} y={156} width={56} height={68} rx={4} fill="#ffffff" stroke={INK} strokeWidth={2.5} />
    <rect x={22} y={168} width={40} height={4} rx={2} fill={PAPER_LINE} />
    <rect x={22} y={178} width={40} height={4} rx={2} fill={PAPER_LINE} />
    <rect x={22} y={188} width={28} height={4} rx={2} fill={PAPER_LINE} />
  </g>
);

const AlunoExtras: FC = () => (
  <>
    <g transform="rotate(18 72 6)">
      <rect x={58} y={-4} width={30} height={18} rx={4} fill={INK} />
      <rect x={62} y={0} width={22} height={10} rx={1.5} fill={SPIKE} />
    </g>
    <circle cx={88} cy={-2} r={6} fill={ACCENT} stroke="#f6f9fd" strokeWidth={2} />
  </>
);

const Mascot: FC<MascotProps> = ({ variant, className, title }) => (
  <svg className={className} viewBox="6 -8 188 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
    <BaseCreature />
    {variant === 'professor' && <ProfessorExtras />}
    <Head />
    {variant === 'hero' && <HeroExtras />}
    {variant === 'aluno' && <AlunoExtras />}
  </svg>
);

export default Mascot;