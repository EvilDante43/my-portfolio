const variants = {
  primary: 'bg-fg text-bg hover:opacity-85',
  secondary: 'border border-line text-fg hover:bg-fg/5',
  ghost: 'text-muted hover:text-fg',
};

export default function Button({ href, variant = 'primary', icon: Icon, spin = false, children, className = '', ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon size={16} aria-hidden="true" className={spin ? 'animate-spin' : ''} />}
      {children}
    </Tag>
  );
}

export const external = { target: '_blank', rel: 'noopener noreferrer' };
export const resumeProps = (p) => ({ href: p.resume, download: p.resumeName });
