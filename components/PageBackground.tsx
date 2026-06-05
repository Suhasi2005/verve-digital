/**
 * One continuous background behind the whole site: soft lavender mesh,
 * a faint dotted grid, and slowly drifting aurora blobs. Fixed so it stays
 * consistent as you scroll (like Gossip Guru's single-canvas feel).
 */
export default function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid-faint opacity-40" />
      <div className="absolute -left-32 top-0 h-[34rem] w-[34rem] animate-blob rounded-full bg-brand-300/15 blur-[130px]" />
      <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] animate-blob rounded-full bg-accent-300/12 blur-[130px] [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-200/12 blur-[130px] [animation-delay:8s]" />
    </div>
  );
}
