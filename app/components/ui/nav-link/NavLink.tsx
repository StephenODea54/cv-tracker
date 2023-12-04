'use client';

// Module Imports
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

// Utils
import { cn } from '@/lib/utils';

// Types
interface NavLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

export const NavLink = ({
    children,
    className,
    href,
    ...props
}: NavLinkProps) => {
    const pathname = usePathname();

    return (
        <Link
            className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === href ? 'text-foregound' : 'text-foreground/60',
                className,
            )}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};
