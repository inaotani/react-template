import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
	base: 'p-4  h-12 rounded text-sm capitalize  font-semibold leading-4 disabled:opacity-70 disabled:text-neutral-700 disabled:hover:brightness-100 disabled:cursor-not-allowed disabled:bg-neutral-200',
	variants: {
		variant: {
			primary: 'bg-primary hover:brightness-125 text-white',
			secondary: 'border border-solid border-primary text-primary hover:bg-primary hover:text-white',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export default function Button({ variant, children, className, ...props }: ButtonProps) {
	return (
		<button className={button({ variant, className })} {...props}>
			{children}
		</button>
	);
}
