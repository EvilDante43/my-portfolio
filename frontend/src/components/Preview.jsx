// Stylised CSS preview of a deployed app (screenshots can't be fetched at build time).
export default function Preview({ project }) {
  const { hue, kind, domain, name, title } = project;
  const b = (a) => ({ background: `hsl(${hue} 65% 58% / ${a})` });
  const bar = 'h-2 rounded-full';
  let body;

  if (kind === 'grid') {
    body = (
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-md border border-line p-2">
            <div className="h-9 rounded" style={b(0.16)} />
            <div className={`${bar} mt-2 w-3/4`} style={b(0.3)} />
            <div className={`${bar} mt-1.5 w-1/3`} style={b(0.55)} />
          </div>
        ))}
      </div>
    );
  } else if (kind === 'wallet') {
    body = (
      <div className="space-y-2">
        <div className="rounded-md p-3" style={b(0.2)}>
          <div className={`${bar} w-1/4`} style={b(0.45)} />
          <div className="mt-2 h-4 w-1/2 rounded" style={b(0.7)} />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-line p-2">
            <div className="h-5 w-5 rounded-full" style={b(0.3)} />
            <div className={`${bar} w-1/3`} style={b(0.25)} />
            <div className={`${bar} ml-auto w-10`} style={b(0.55)} />
          </div>
        ))}
      </div>
    );
  } else if (kind === 'table') {
    body = (
      <div className="overflow-hidden rounded-md border border-line">
        <div className="h-6" style={b(0.2)} />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 border-t border-line px-2 py-2">
            <div className="h-4 w-4 rounded" style={b(0.3)} />
            <div className={`${bar} w-1/3`} style={b(0.22)} />
            <div className={`${bar} ml-auto w-12`} style={b(0.5)} />
          </div>
        ))}
      </div>
    );
  } else {
    body = (
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-line p-2">
            <div className="h-4 w-4 rounded-full border" style={{ borderColor: `hsl(${hue} 65% 58% / .6)` }} />
            <div className={`${bar}`} style={{ ...b(0.25), width: `${70 - i * 12}%` }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div role="img" aria-label={`Stylised preview of ${title}`} className="overflow-hidden rounded-lg border border-line bg-bg">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-line" />)}
        <span className="ml-2 truncate text-[11px] text-muted">{domain}</span>
      </div>
      <div className="aspect-[16/9] overflow-hidden p-4">
        <div className="origin-top transition-transform duration-500 group-hover:scale-[1.04]">
          <p className="mb-3 text-xs font-medium">{name}</p>
          {body}
        </div>
      </div>
    </div>
  );
}
