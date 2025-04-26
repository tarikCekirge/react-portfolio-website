import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type BlockTitleProps = {
    as?: HeadingTag;
    children: ReactNode;
    className?: string;
};

const BlockTitle = ({ as: As = 'h3', children, className }: BlockTitleProps) => {
    return (
        <As className={cn('text-5xl mb-12 font-bold', className)}>
            {children}
        </As>
    );
};

export default BlockTitle;
