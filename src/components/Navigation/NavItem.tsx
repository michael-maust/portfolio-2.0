import { cn } from 'utils/cn.ts';

type NavItemProps = {
  anchor: string;
  name: string;
};

export function NavItem({ anchor, name }: NavItemProps) {
  return (
    <li key={anchor}>
      <a
        href={`#${anchor}`}
        className={cn(
          'border-none text-tan hover:text-primary font-medium cursor-pointer transition-colors duration-300',
        )}
      >
        {name}
      </a>
    </li>
  );
}
