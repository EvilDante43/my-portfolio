import Reveal from './Reveal.jsx';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-14 border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
