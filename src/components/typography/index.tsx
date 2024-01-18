import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const typography = tv({
	base: 'font-bold',
	variants: {
		variant: {
			h1: 'text-4xl',
			h2: 'text-3xl',
			h3: 'text-2xl',
			h5: 'text-base',
			'medium-body': 'font-normal text-sm',
		},
	},
	defaultVariants: {
		variant: 'h1',
	},
});

type TypographyProps = ComponentProps<'h1'> & VariantProps<typeof typography>;

function H1({ variant = 'h1', children, className, ...props }: TypographyProps) {
	return (
		<h1 className={typography({ variant, className })} {...props}>
			{children}
		</h1>
	);
}

function H2({ variant = 'h2', children, className, ...props }: TypographyProps) {
	return (
		<h2 className={typography({ variant, className })} {...props}>
			{children}
		</h2>
	);
}

function H3({ variant = 'h3', children, className, ...props }: TypographyProps) {
	return (
		<h3 className={typography({ variant, className })} {...props}>
			{children}
		</h3>
	);
}

function Span({ variant = 'medium-body', children, className, ...props }: TypographyProps) {
	return (
		<span className={typography({ variant, className })} {...props}>
			{children}
		</span>
	);
}

function Text({ variant, children, className, ...props }: TypographyProps) {
	return (
		<p className={typography({ variant, className })} {...props}>
			{children}
		</p>
	);
}

const Typographies = { H1, H2, H3, Span, Text };
export default Typographies;
