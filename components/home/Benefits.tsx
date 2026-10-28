import { MessagesSquare, HardHat, House } from "lucide-react";
const benefits = [
  { Icon: MessagesSquare, label: "Clear communication" },
  { Icon: HardHat, label: "Dependable workmanship" },
  { Icon: House, label: "Tailored to your home" },
];
export default function Benefits() {
  return (
    <section className="benefits" aria-label="Our approach">
      {benefits.map(({ Icon, label }) => (
        <div key={label}>
          <Icon size={29} strokeWidth={1} />
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
