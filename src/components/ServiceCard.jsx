export default function ServiceCard({ icon, title, children }) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
